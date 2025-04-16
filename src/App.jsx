import { useState } from 'react';

// trigger -> render -> commit
function App() {
  const [ count, setCount ] = useState(0);
  
  // const result = useState(0);
  // const count = result[0];
  // const setCount = result[1];

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div onClick={handleClick}>{count}</div>
  )
}

export default App;