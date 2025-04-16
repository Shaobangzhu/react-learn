import { useImmer } from 'use-immer';

// 从命令式开发到声明式开发
// 命令式: 你一步步指路,告诉出租车司机怎么回家
// 声明式: 你告诉出租车司机,你家在哪, 出租车司机会自动把车开到家门口

function App() {
  const [user, setUser] = useImmer({
    firstName: '',
    lastName: ''
  });

  function handleFirstNameChange(e) {
    setUser((draft) => { draft.firstName = e.target.value })
  }

  function handleLastNameChange(e) {
    setUser((draft) => { draft.lastName = e.target.value })
  }

  return (
    <div>
      First Name: <input onChange={handleFirstNameChange} />
      <br/>   
      <br/>  
      Last Name: <input onChange={handleLastNameChange} />
      <br/>   
      <br/> 
      Full Name: {user.firstName + ' ' + user.lastName}
    </div>)
}

export default App;
