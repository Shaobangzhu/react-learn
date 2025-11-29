// 1. 计数器组件 -- Basic useState
// 写一个函数组件 count, 有两个按钮 +1, Reset, 初始值为0

import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleReset = () => setCount(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}