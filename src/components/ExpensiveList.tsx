// 8. useMemo / React.memo 优化 (避免不必要的重渲染)
// 写一个<ExpensiveList />: props: items: number[] 通过一个很'重'的计算 (例如模拟CPU消耗) 求sum
// - 使用useMemo, 只有items改变时才重新计算
// - 再写一个父组件, 使得其他state改变时, sum不重复计算

import { useMemo, useState } from "react";

function heavySum(items: number[]): number {
    // 模拟重计算
    let total = 0;
    for (let i = 0; i < 100000; i++) {
        // pretend to be busy
    }
    for (const n of items) total += n;
    return total;
}

interface ExpensiveListProps {
    items: number[];
}

export function ExpensiveList({ items }: ExpensiveListProps) {
    const sum = useMemo(() => heavySum(items), [items]);

    return <p>Sum: {sum}</p>
}

export function ExpensiveDemo() {
    const [items] = useState([1, 2, 3]);
    const [count, setCount] = useState(0);

    return (
        <div>
            <ExpensiveList items={items} />
            <button onClick={() => setCount((c) => c + 1)}>Re-render: {count}</button>
        </div>
    );
}

// useMemo语义: 避免重复heavey计算, 而不是解决所有重渲染