import { useState } from "react";
import { MyApp } from "./components/MyApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-hidden">
      <MyApp />
    </div>
  );
}

export default App;
