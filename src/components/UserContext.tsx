// 7. useContext + 自定义Provider (类似Angular的Service + DI)
// 实现一个简单的UserContext
// - UserContext提供当前用户 ({ id, name } | null)
// - 写一个UserProvider组件, 接受user prop, 并通过Context提供给子组件
// - 写一个UserGreeting组件, 显示: A已登录: Hello, {name} B未登录: Hello, guest

import { useContext, createContext } from "react";

type User = { id: number; name: string } | null;

const UserContext = createContext<User>(null);

interface UserProviderProps {
  user: User;
  children: React.ReactNode;
}

export function UserProvider({ user, children }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function useUser() {
  return useContext(UserContext);
}

export function UserGreeting() {
  const user = useUser();
  return <p>Hello, {user ? user.name : "guest"}</p>;
}

// Context基本用法: createContext + Provider + useContext
// TS中Context默认值 & 自定义hook (useUser)
