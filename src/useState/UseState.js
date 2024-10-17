import { useState } from "react";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItme = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItme}>Decrement</button>
    </div>
  );
};

export default App;
