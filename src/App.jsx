import { useState } from 'react';

// 从命令式开发到声明式开发
// 命令式: 你一步步指路,告诉出租车司机怎么回家
// 声明式: 你告诉出租车司机,你家在哪, 出租车司机会自动把车开到家门口

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      First Name: <input onChange={handleFirstNameChange} />
      <br/>   
      <br/>  
      Last Name: <input onChange={handleLastNameChange} />
      <br/>   
      <br/> 
      Full Name: {firstName} {lastName}
    </div>)
}

export default App;
