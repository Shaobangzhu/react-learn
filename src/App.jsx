import Header from "./Header/index";
import Body from "./Body/index";
import nameContext from "./nameContext";

function App() {
  return (
    <div>
      <nameContext.Provider value='clu'>
        <Header />
        <Body />
      </nameContext.Provider>
    </div>
  );
}

export default App;