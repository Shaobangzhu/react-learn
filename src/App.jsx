import { useState, useCallback } from 'react'

// useCallBack 是React提供的一个Hook, 用来缓存函数的引用, 避免因为组件的重新渲染导致函数被重新创建。
// 注: 1. 如果不传入依赖数组, useCallback不会起作用 2. 滥用useCallback会增加代码复杂度,
// 只有在函数频繁作为props传递并影响性能时才考虑使用

function App() {
  const [content, setContent] = useState('default');

  const handleContentChange = useCallback((e) => {
    setContent(e.target.value)
  }, [])

  return (
    <input value={content ? content: ''} onChange={handleContentChange} />
  );
}

export default App;