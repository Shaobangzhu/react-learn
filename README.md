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

# Props vs State vs Context — Comparison Table

React 有三种核心数据管理方式：**Props、State、Context**。  
它们的用途、数据流、可变性、管理范围都不同。

下面是一个清晰的对照表，适合作为学习笔记或技术面试复习材料。

---

## 📌 Comparison Table

| Feature | Props | State | Context |
|--------|-------|--------|---------|
| **Definition** | Data passed *from parent to child* | Data *owned and managed* by the component | Global/shared state across component tree |
| **Who owns it?** | Parent component | The component itself | Context Provider |
| **Mutable?** | ❌ Read-only | ✔ Can update via setter | ✔ Updatable, but through Provider logic |
| **How to update?** | Parent re-renders with new props | `setState` / `setX()` | Change Provider value |
| **Data Flow** | One-way (parent → child) | Internal to component | Any → any (through Provider) |
| **Use cases** | Passing input, callbacks, configuration | Local UI state (form, toggles, loading) | Auth user, theme, global settings |
| **Triggers re-render?** | ✔ Yes | ✔ Yes | ✔ Yes (when context value changes) |
| **Lifespan** | As long as parent renders child | Component lifetime | App or subtree lifetime |
| **How it’s accessed** | Component props param | `useState` hook | `useContext` hook |
| **Can child modify it?** | ❌ No | ✔ Yes | ✔ Yes (if Provider exposes setter) |
| **Similar to Angular?** | `@Input()` | Component variable | Service + DI |

---

## 📘 Short Summary

### **Props**
- Component **inputs**
- Read-only  
- Parent → Child data flow  
- Best for *configuration & passing data downward*

---

### **State**
- Component’s **own internal data**
- Updated through hooks (`useState`)  
- Best for *local UI interactions*  
  (forms, toggles, modals, counters)

---

### **Context**
- A **shared global store** for the tree  
- Avoids “prop drilling”  
- Best for *app-wide or shared state*:
  - Auth user
  - Theme
  - Localization
  - User preferences

---

## 🧠 When to use which?

| Scenario | Use |
|----------|-----|
| Passing data to a child component | Props |
| Managing a toggle, input value, internal UI | State |
| Many components need the same data | Context |
| Avoid prop drilling through multiple layers | Context |
| Logic must be local and isolated | State |
| Parent controls child behavior | Props |

---

## 💡 Visual Diagram

```
Parent ----(props)---> Child
Component ----(state internal)---> Self
Provider ----(context)----> Any nested component
```

---

## 🎯 Interview-Ready Explanation

**Props:**  
> Props are read-only inputs passed from parent to child, enabling predictable one-way data flow.

**State:**  
> State is local, mutable data managed inside a component through React hooks.

**Context:**  
> Context provides global or shared state without passing props manually through each component layer.

---
