import { useState } from "react";

// immutable 编程规范

function App() {
  const [data, setCount] = useState({
    count: 0
  });

  function handleClick() {
    const newData = {
      count: data.count + 1
    }
    setCount(newData);
  }

  return <div onClick={handleClick}>{data.count}</div>;
}

export default App;
