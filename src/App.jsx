// Strict Mode 严格模式, 在 Effect 中的执行逻辑
// render 函数渲染完成后, useEffect 会开始判断是否执行
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().getTime());
  
  // timer 在严格开发模式下, 需要进行清理
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(123);
      setTime((new Date()).getTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return <div>{time}</div>;
}

export default App;
