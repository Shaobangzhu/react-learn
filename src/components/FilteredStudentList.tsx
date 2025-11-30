// 6.useEffect依赖控制 (过滤列表)
// 写一个<FilteredStudentList />
// - props: students: Student[]
// - 有一个input, 用来输入过滤关键词
// - 使用useEffect在关键字变化时计算filteredStudents

// - useEffect 依赖项写得清楚: [query, students]
// - 用state存衍生数据 vs 直接render时filter

// import { useState, useEffect } from "react";

// type Student = { id: number; name: string };

// interface Props {
//     students: Student[];
// }

// export function FilteredStudentList({ students }: Props) {
//     const [query, setQuery] = useState("");
//     const [filtered, setFiltered] = useState<Student[]>(students);

//     useEffect(() => {
//         const q = query.toLowerCase();
//         setFiltered(
//             students.filter((s) => s.name.toLowerCase().includes(q))
//         );
//     }, [query, students]);

//     return (
//         <div>
//             <input
//                 placeholder="Search..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             <ul>
//                 {filtered.map((s) => (
//                     <li key={s.id}>{s.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }