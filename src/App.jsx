import { useRef } from 'react';
import InputComponent from './inputComponent';

function App() {
  const inputElement = useRef(null);

  function handleBtnClick() {
    inputElement.current.focus();
  }

  return (
    <div>
      <InputComponent ref={ inputElement } />{" "}
      <button onClick={handleBtnClick}>Focus</button>
    </div>
  );
}

export default App;