import { useState } from 'react';
import Timer from "./Timer copy";

// 1. 清除 Effect 引入的临时内容，避免内存泄漏
function App() {
  const [showTimer, setShowTimer] = useState(false);

  function handleBtnClick() {
    const showState = !showTimer;
    setShowTimer(showState);
  }

  return (
    <div>
      { showTimer ? <Timer /> : null }
      
      <button onClick={handleBtnClick}>Toggle</button>
    </div>
  );
}

export default App;