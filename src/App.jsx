import { useRef, useState } from 'react';

function App() {
  // 1. timer: {current: null}
  // 2. timer: {current: timer 引用}
  // 3. timer: {current: null}
  // Ref 用来保存 React 组件中不需要驱动页面变更的数据
  
  const [ time, setTime ] = useState((new Date()).getTime());
  const timer = useRef(null);

  function handleStartBtnClick() {
    timer.current = setInterval(() => {
      setTime((new Date()).getTime());
    }, 1000);
  }

  function handleStopBtnClick() {
    clearInterval(timer.current);
  }

  return (
    <div>
      <button onClick={handleStartBtnClick}>Start</button>
      <button onClick={handleStopBtnClick}>Stop</button>
      <div>{time}</div>
    </div>
  );
}

export default App;
