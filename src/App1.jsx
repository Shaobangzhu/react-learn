import { useState } from "react";

function App1() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleButtonClick() {
    const newList = [
      ...list,
      {
        id: inputValue,
        value: inputValue,
      },
    ];
    setList(newList);
    setInputValue("");
  }

  function handleItemClick(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />{" "}
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={item.id} onClick={() => handleItemClick(index)}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App1;
