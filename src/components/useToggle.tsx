// 9. 自定义Hook (抽取重复逻辑)
// 封装一个自定义hook: useToggle(initial: boolean)
// 返回[value, toggle]
// toggle() 会把true/false反转
// 用它写一个<TogglePanel />:
// - 有个按钮, 点击切换
// - 显示: Panel is visible / Panel is hidden
// 自定义Hook命名: useXxx
// 返回tuple pattern

import { useState } from "react";

function useToggle(initial: boolean): [boolean, ()=>void] {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue((v: boolean) => !v);
    return [value, toggle];
}

export function TogglePanel() {
    const [visible, toggle] = useToggle(false);

    return (
        <div>
            <button onClick={toggle}>
                {visible ? "Hide panel" : "Show panel"}
            </button>
            {visible && <p>Panel is visible</p>}
        </div>
    );
}