import { useState } from "react";
import Header from "./Header/index";
import Body from "./Body/index";
import nameContext from "./nameContext";

function App() {
  const [user, setUser] = useState(' Loading ...');

  function handleHeaderChange() {
    setUser('clu');
  }

  return (
    <div>
      <nameContext.Provider value={user}>
        <Header onChange={handleHeaderChange} />
        <Body />
      </nameContext.Provider>
    </div>
  );
}

export default App;