import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [ useColor, setUseColor ] = useState(true);

  return (
    <div>
      <Counter />
      {useColor ? <Counter useColor={useColor}/>: <Counter />}
      <button onClick={() => setUseColor(!useColor)}>Toggle</button>
    </div>
  );
}

export default App;
