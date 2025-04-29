import { useState, useEffect } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(true);

  function updateState() {
    setIsOnline(window.navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", updateState);
    window.addEventListener("offline", updateState);
  }, []);

  return <div>{isOnline.toString()}</div>;
}

export default App;