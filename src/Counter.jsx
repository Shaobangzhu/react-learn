import { useState } from 'react';

// 组件在页面上被销毁, 状态会被清空
// 组件所处的UI节点位置发生变化时,组件会被销毁

function Counter({useColor}) {
  const [count, setCount] = useState(0);

  return (
    <div style={{color: useColor ? 'red' : 'green'}} onClick={() => setCount(count + 1)}>
        {count}
    </div>
  );
}

export default Counter;