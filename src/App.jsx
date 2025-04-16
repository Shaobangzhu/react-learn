import { useImmer } from "use-immer";

// immutable 编程规范

function App() {
  const [data, setData] = useImmer({
    count: 0
  });

  function handleClick() {
    setData((draft) => {
      draft.count = draft.count + 1;
    });
  }

  return <div onClick={handleClick}>{data.count}</div>;
}

export default App;
