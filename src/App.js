import React, { useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForeLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForeLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default App;
