export default function Button1() {
  function click() {
    console.log("button clicked");
  }

  return (
    <div>
      <button
        type="button"
        className="outline-none text-white bg-green-700 w-32 hover:bg-blue-900  font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Sem 1
      </button>
    </div>
  );
}
