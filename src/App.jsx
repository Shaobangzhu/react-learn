import { useState, memo } from 'react';

// 组件所依赖的 props 没有发生变化, 那么这个组件就不进行重新渲染, 使用缓存
const Child = memo(({ name, address }) => {
  console.log('Child render');
  return <div>{name} <br/><br/> {address}</div>;
}, (originProps, props) => {
  // 如果 address 发生变化, 不用缓存
  if(originProps.address !== props.address) {
    return false;
  }
  // 否则, 使用缓存
  return true;
});

function App() {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');

  return (
    <>
      <div>
        NAME: <input value={name || ''} onChange={(e) => {setName(e.target.value)}} />
      </div>
      <br />
      <div>
        ADDRESS: <input value={address || ''} onChange={(e) => {setAddress(e.target.value)}} />
      </div>
      <Child name={name} address={address}></Child>
    </>
  );
}

export default App;
