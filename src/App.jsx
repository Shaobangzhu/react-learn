import { useState } from "react";
import { PartOne, PartTwo } from './Parts';

// 父子组件传值, 主要是为了解决组件间数据共享的问题
function App() {
  const [ showPartOne, setShowPartOne ] = useState(true);

  return (
    <div>
      <PartOne showPartOne={showPartOne} setShowPartOne={setShowPartOne} />
      <PartTwo showPartOne={showPartOne} setShowPartOne={setShowPartOne} />
    </div>
  );
}

export default App;
