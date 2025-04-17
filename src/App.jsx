import { useState, useReducer } from "react";
// reducer 使用流程
// 1. 定义数据
// 2. 定义 reducer 函数
// 3. 定义 Action 发送改变数据的指令
// 4. 拿到 Action 之后, dispatch 派发 Action
// 5. Reducer中 根据指令修改数据
// 6. 完成数据的修改

function listReducer(state, action) {
  if (action.type === "add") {
    const newState = [
      ...state,
      {
        id: action.value,
        value: action.value,
      },
    ];
    return newState;
  }
  if (action.type === "delete") {
    const newState = [...state];
    newState.splice(action.value, 1);
    return newState;
  }
  return state;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, dispatch] = useReducer(listReducer, []);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleButtonClick() {
    const action = {
      type: "add",
      value: inputValue,
    };
    dispatch(action);
    setInputValue("");
  }

  function handleItemClick(index) {
    const action = {
      type: "delete",
      value: index,
    };
    dispatch(action);
  }

  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
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

export default App;