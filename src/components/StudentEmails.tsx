// 5. useEffect + fetch数据 (模拟HttpClient)
// - 写一个<StudentEmails />, 初始时从/api/students 获取数据
// - useEffect只在首次render触发请求,渲染email列表,简单处理loading/error状态

// import { useState, useEffect } from "react";

// type Student = { id: number; name: string; email: string };

// export function StudentEmails() {
//     const [students, setStudents] = useState<Student[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {

//         let cancelled = false;

//         async function load() {
//             try {
//                 setLoading(true);
//                 const res = await fetch("/api/students");
//                 if (!res.ok) throw new Error("Network errot");
//                 const data: Student[] = await res.json();
//                 if (!cancelled) setStudents(data);
//             } catch (err) {
//                 if (!cancelled) {
//                     const message = err instanceof Error ? err.message : String(err ?? "Unknown error");
//                     setError(message);
//                 }
//             } finally {
//                 if (!cancelled) setLoading(false);
//             }
//         }

//         load();

//         return () => {
//             cancelled = true;
//         };
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if(error) return <p>Error: {error}</p>

//     return (
//         <ul>
//             {students.map((s) => (
//                 <li key={s.id}>{s.email}</li>
//             ))}
//         </ul>
//     );
// }

// In this Component, I use useEffect with an empty dependency array so the data is fetched only once on
// initial render. Inside the useEffect, I define an async load function that calls /api/students via fetch,
// updates local state on success, and handles both loading and error states.
// To avoid state updates on an unmounted Component, I maintain a cancelled flag and check it before calling 
// steStudents, setError, or setLoading. This prevents potential memory leaks or React warnings when the request
// finishes after the component has already been unmounted.
