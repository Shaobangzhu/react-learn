# React Practice – 10 Essential Exercises (with TypeScript)

This project is a lightweight practice playground built with **Vite + React + TypeScript**,  
designed for reviewing React fundamentals including:
State (useState), Effects (useEffects), Lists & keys, Parent-child communication, Fetching, Derived data, Context, Memorization, Custom hooks, Routing

All exercises are placed in:

```
src/components/
  ├── 01-Counter.tsx // 计数器组件 (useState 基础)
  ├── 02-NameForm.tsx // 受控表单组件 (讲解 Controlled Input)
  ├── 03-StudentList.tsx // 列表渲染 + key (List Rendering)
  ├── 04-StudentListWithSelect.tsx // 父子组件通信: props + 回调 (类似Angular Input/Output)
  ├── 05-StudentEmails.tsx // useEffect + fetch 数据 (模拟HttpClient)
  ├── 06-FilteredStudentList.tsx //useEffect with dependencies 依赖控制 (过滤列表)
  ├── 07-UserContext.tsx // useContext + 自定义Provider (类似Angular的Service + DI)
  ├── 08-ExpensiveList.tsx // useMemo / React.memo优化 (避免不必要重复渲染)
  ├── 09-useToggle.tsx // 自定义Hook (抽取重复逻辑)
  └── 10-AppRouter.tsx // 路由的基本用法 (React Router v6 style)
```

To run any exercise, simply import it inside `src/App.tsx`:

```tsx
import { Counter } from "./components/01-Counter";

function App() {
  return <Counter />;
}

export default App;
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open:

```
http://localhost:5173/
```

---
