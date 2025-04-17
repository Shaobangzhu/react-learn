import { useState } from 'react';
import Email from './Email';

function App() {
  const [to, setTo] = useState('clu');

  return (
    <div>
      {
        (to === 'clu') ? <Email to={to} /> : <div><Email to={to} /></div>
      }
      <button onClick={()=>{setTo('extron')}}>toggle</button>
    </div>
  );
}

export default App;
