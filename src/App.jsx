import { useReducer } from "react";
import dataReducer from "./reducer";

// 使用Reducer带来的变化
// 1. 业务逻辑代码量显著降低
// 2. 代码可读性比较高
// 3. 前端自动化测试方便 Jest
// 4. 组件复用性降低

function App() {
  const [data, dispatch] = useReducer(dataReducer, {
    inputValue: '',
    list: []
  });

  function handleInputChange(e) {
    const action = { type: 'changeInput', value: e.target.value };
    dispatch(action);
  }

  function handleButtonClick() {
    const action = { type: 'addItem' }
    dispatch(action);
  }

  function handleItemClick(index) {
    const action = { type: "deleteItem", value: index };
    dispatch(action);
  }

  return (
    <div>
      <div>
        <input value={data.inputValue} onChange={handleInputChange} />{"  "}
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      <ul>
        {
          data.list.map((item, index) => (
            <li key={item.id} onClick={() => handleItemClick(index)}>
              {item.value}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;