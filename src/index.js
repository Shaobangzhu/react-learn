import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
}

root.render(
  <React.StrictMode>
    <Profiler id="app" onRender={renderCallback}>
      <App />
    </Profiler>
  </React.StrictMode>
);
