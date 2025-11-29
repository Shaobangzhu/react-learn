// 2. 受控表单组件 (Controlled Input)
// 写一个 <NameForm /> 文本框输入name, 下面实时显示"Hello, {name}",输入为空时显示"Hello, stranger"
// 考点: 受控组件: value + onChange / TS中事件类型 React.ChangeEvent<HTMLInputElement>

import { useState } from "react";

export function NameForm() {
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <input value={name} onChange={handleChange} placeholder="Enter your name" />
            <p>Hello, {name.trim() ? name : "stranger"}</p>
        </div>
    );
}
