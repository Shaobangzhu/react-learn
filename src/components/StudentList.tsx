// 3. 列表渲染 + key (学生列表)
// 写一个<StudentList />: 接收students prop, 渲染<li>列表, 使用稳定的key
// Props: 组件从父组件接收的数据

// type Student = { id: number; name: string };

// interface StudentListProps {
//   students: Student[];
// }

// export function StudentList({ students }: StudentListProps) {
//   return (
//     <ul>
//       {students.map((s) => (
//         <li key={s.id}>{s.name}</li>
//       ))}
//     </ul>
//   );
// }
