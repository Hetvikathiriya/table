import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table1 from "./components/Table1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Table1 className="min-w-[800px] text-white" />
      
    </>
  );
}

export default App;
