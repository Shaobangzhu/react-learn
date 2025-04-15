import Hello from './Hello';
import Bye from './Bye';

function App() {
  const helloMsg = 'Hello React 18';
  const byeMsg = 'Bye React 18';
  return (
    <>
      <Hello msg={helloMsg} />
      <Bye msg={byeMsg} />
    </>
  );
}

export default App;