import Child from './Child';

function App() {
  
  return (
    <div>
      <Child onAbc={()=>{console.log('abc')}} />
    </div>
  );
}

export default App;