import { useState } from 'react';

function App() {
  const [ userInfo, setUserInfo ] = useState({
    name: 'clu', sex: 'male'
  });

  const handleClick = () => {
    const newUserInfo = { ...userInfo };
    newUserInfo.name = 'Chaoran';
    setUserInfo(newUserInfo);
  }

  return (
    <div onClick={handleClick}>{userInfo.name}</div>
  );
}

export default App;