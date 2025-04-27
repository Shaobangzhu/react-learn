// 2. Effect 是在 render 执行结束, 页面更新之后, 再执行的
import { useState } from 'react';
import VideoPlayerTwo from './VideoPlayerTwo';

function App() {
  // 播放状态
  const [isPlaying, setIsPlaying] = useState(false);

  function handleBtnClick() {
    setIsPlaying(!isPlaying);
  }

  const btnContent = isPlaying ? "Pause" : "Play";

  return (
    <div>
      <VideoPlayerTwo src="/video/a.mp4" isPlaying={isPlaying} />
      <button onClick={handleBtnClick}>{btnContent}</button>
    </div>
  );
}

export default App;