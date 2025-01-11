import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table1 from "./components/Table1";
import Faculty from "./components/Faculty";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Table1 />
      <Faculty />
    </>
  );
}

export default App;
