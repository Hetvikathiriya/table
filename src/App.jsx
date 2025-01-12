import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table1 from "./components/Table1";
import Faculty from "./components/Faculty";
import Header from "./components/Header";
import Button1 from "./components/Button1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <br />
      <br />
      <h2 className="text-left font-medium text-2xl mb-4">B.sc.(IT) </h2>
      <table>
        <tr>
          <td>
            <Button1 />
          </td>
          <td className="px-7">
            <Button1 />
          </td>
          <td>
            <Button1 />
          </td>
          <td className="px-7">
            <Button1 />
          </td>
          <td>
            <Button1 />
          </td>
          <td className="px-7">
            <Button1 />
          </td>
        </tr>
      </table>
      <br />

      <Table1 />
      <br />
      <br />
      <br />

      <h2 className="text-left font-medium text-2xl mb-4">M.sc.(IT) </h2>
      <table>
        <tr className="">
          <td>
            <Button1 />
          </td>
          <td className="px-7">
            <Button1 />
          </td>
          <td>
            <Button1 />
          </td>
          <td className="px-7">
            <Button1 />
          </td>
        </tr>
      </table>
      <br />

      <Table1 />
      <br />
      <br />
      <br />

      <h2 className="text-left text-3xl font-medium">Faculty</h2>
      <br />
      <table>
        <tr>
          <td>
            <svg
              class="w-12 h-12 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </td>
          <td className="size-14 ">
            <Faculty />
          </td>
          <td className="px-7">
            <Faculty />
          </td>
          <td className="size-16  1`">
            <Faculty />
          </td>
          <td>
            <svg
              class="w-12 h-12 text-gray-800  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;
