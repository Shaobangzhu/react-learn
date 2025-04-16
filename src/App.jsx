import { useState } from 'react';

function App() {
  const [ userInfo, setUserInfo ] = useState(['clu']);

  const handleClick = () => {
    const newUserInfo = { ...userInfo };
    newUserInfo[0] = 'Chaoran';
    setUserInfo(newUserInfo);
  }

  return (
    <div onClick={handleClick}>{userInfo[0]}</div>
  );
}

export default App;