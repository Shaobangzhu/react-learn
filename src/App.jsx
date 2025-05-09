// 1. 组件存在的整个过程称为一个生命周期
// 挂载(mount) -> 更新(update) -> 卸载(unmount)
// 组件的挂载和销毁只有一次
// 2. Effect 存在的整个过程称为一个生命周期
// 创建执行 -> 销毁
// 组件里的 effect 的挂载和销毁可能会有很多次
// 3. Effect和Event的区别是什么呢?
// Effect是有依赖数据驱动执行的, Event一定是由用户操作行为驱动执行的

import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("clu");

  useEffect(() => {
    console.log("execute");
    return () => {
      console.log("destroy");
    };
  }, [username]);

  console.log("render");

  return (
    <div
      onClick={() => {
        setUsername("CLU");
      }}
    >
      HELLO REACT
    </div>
  );
}

export default App;