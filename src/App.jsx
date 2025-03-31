import Hello from './Hello';
import Bye from './Bye';

function App() {
  const flag = true;
  return (
    <>
      <Hello />
      <div>{ flag ? 'flag' : 'no flag' }</div>
      <Bye />
    </>
  );
}

export default App;