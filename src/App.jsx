import { useState, useCallback, useDebugValue } from "react";

function useContent() {
  useDebugValue("more content info");
  const [content, setContent] = useState("");
  const handleContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  return [content, handleContentChange];
}

function useName() {
  useDebugValue("more name info");
  const [name, setName] = useState("");
  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  return [name, handleNameChange];
}

function App() {
  const [content, handleContentChange] = useContent();
  const [name, handleNameChange] = useName();

  return (
    <>
      <input value={content ? content : ""} onChange={handleContentChange} />
      <br/>
      <br/>
      <input value={name ? name : ""} onChange={handleNameChange} />
    </>
  );
}

export default App;
