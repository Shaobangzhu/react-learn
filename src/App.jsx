import { useState, useDeferredValue, memo } from "react";

const Todos = memo(({ text }) => {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push(<div key={i}>{text}</div>);
  }
  const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < 200) {}
  return <div>{items}</div>;
});

function App() {
  const [inputValue, setInputValue] = useState("");
  const deferredInputValue = useDeferredValue(inputValue);

  return (
    <>
      <input
        value={inputValue || ""}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Todos text={deferredInputValue} />
    </>
  );
}

export default App;
