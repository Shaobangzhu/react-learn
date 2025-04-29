import { useState, useMemo } from 'react';

function App() {
  const list = ['1. Long Call', '2. Long Put', '3. Covered Call', '4. Call Spread'];
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  console.log('step 1');

  // useMemo 相当于做了一个缓存
  // useEffect 是在 render 结束后再执行的
  // useMemo 是在render 运行的过程中执行的
  const filteredList = useMemo(() => {
    console.log('step 2');
    return list.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    // eslint-disable-next-line
  }, [search]);

  console.log('step 3');

  return (
    <div>
      Name: <input value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
      <br />
      Search: <input value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <br />
      <br />
      <select>
        {filteredList.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
}

export default App;