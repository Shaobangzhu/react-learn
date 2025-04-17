import { useState } from 'react';
import Email from './Email';

// 列表中 key 值的作用主要是帮助 React 识别哪些元素发生了变化, 哪些被添加或删除了
// 通过 key 值, React 可以在更新时更高效地重新渲染组件, 提高性能
// 当 key 值不同时, React 会认为这是两个不同的元素, 即使它们的内容相同
// 这会导致 React 在重新渲染时, 删除旧的元素并创建新的元素, 而不是更新现有的元素
// 这可能会导致性能下降, 尤其是在列表较大时
// 通过使用 key 值, React 可以更智能地处理元素的更新, 只更新必要的部分
// 这就是为什么在列表中使用 key 值是一个好的实践的原因

function App() {
  const [to, setTo] = useState('clu');
  const [list, setList] = useState([
    {
      uuid: '1231',
      value: 1
    },
    {
      uuid: '1232',
      value: 2
    },
    {
      uuid: '1233',
      value: 3
    },
    {
      uuid: '1234',
      value: 4
    },
    {
      uuid: '1235',
      value: 5
    }
  ]);

  return (
    <div>
      <Email to={to} key={to} />
      <button onClick={()=>{setTo('extron')}}>toggle</button>
      {
        list.map(item => <p key={item.uuid}>{item.value}</p>)
      }
    </div>
  );
}

export default App;