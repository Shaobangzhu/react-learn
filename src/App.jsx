import { useState } from 'react';

// 1. trigger -> render(virtual dom) -> commit
// 2. virtual dom: 真实dom的一个js对象的表达
// 3. 快照态的数据
// 4. bacthUpdate

function App() {
  const [ count, setCount ] = useState(0);
  
  // const result = useState(0);
  // const count = result[0];
  // const setCount = result[1];

  function handleClick() {
    // setCount(count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  function handleInnerClick() {
    alert('inner click');
  }

  return (
    <div onClick={handleClick}>
      <p onClick={handleInnerClick}>{count}</p>
    </div>
  )
}

export default App;