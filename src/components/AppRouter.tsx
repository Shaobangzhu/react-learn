// 10. 路由基本用法 (React Router v6 style)
// 简单写一个React Router配置
// /显示 <Home />
// /students 显示 <StudentPage />
// 在Nav里使用<Link>导航

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h1>Home</h1>;
}

function StudentPage() {
    return <h1>Students</h1>;
}

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/students">Students</Link>
        </nav>
    );
}

export function AppRouter() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<StudentPage />} />
            </Routes>
        </BrowserRouter>
    );
}