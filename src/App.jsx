import { useState } from 'react';

function App() {
  console.log('excute');

  const [ name, setName ] = useState('CLU');
  return (
    <div onClick={() => {name === 'CLU' ? setName('Chaoran Lu') : setName('CLU') }}>{name}</div>
  );
}

export default App;