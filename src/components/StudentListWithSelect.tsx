// 4. 父子组件通信: props + 回调 (单向数据流: 父传数据，子通过回调"冒泡"事件)
// 子组件 <StudentItem />:
// - props: student: Student, onSelect(id: number): void
// - 显示名字, 一个按钮"Select"
// 父组件 <StudentListWithSelect />:
// - 维护选中的id, 并显示"Selected:xxx"

import { useState } from "react";

type Student = { id: number; name: string };

interface StudentItemProps {
    student: Student;
    onSelect: (id: number) => void;
}

function StudentItem({ student, onSelect }: StudentItemProps) {
    return (
        <div>
            <span>{student.name}</span>
            <button onClick={() => onSelect(student.id)}>Select</button>
        </div>
    );
}

export function StudentListWithSelect() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const students: Student[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ];

    const handleSelect = (id: number) => setSelectedId(id);

    const selectedName = students.find((s) => s.id === selectedId)?.name ?? "None";

    return (
        <div>
            {students.map((s) => (
                <StudentItem key={s.id} student={s} onSelect={handleSelect} />
            ))}
            <p>Selected: {selectedName}</p>
        </div>
    );
}