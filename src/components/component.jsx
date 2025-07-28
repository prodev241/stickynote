import { useState } from "react";
import StickyNotes from "./stickyNotes";
import { Link } from "react-router-dom";
const Component = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  console.log(notes);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
        <div className="bg-white p-6 rounded border-1 border-amber-600 border-t-amber-200 border-b-amber-400 shadow-xl/30 w-[700px] bg">
          <h1 className="text-center font-bold mb-4 text-amber-500">
            Notes App
          </h1>
          <div className="flex flex-row gap-3">
            <input
              className="border-2  border-amber-600 rounded  border-t-amber-200 border-b-amber-400 p-2 w-full mb-4"
              type="text"
              value={input}
              onChange={(i) => setInput(i.target.value)}
              placeholder="Add a note"
            />
            <button
               className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700  text-[14px] whitespace-nowrap h-[44px]"
              onClick={() => {
                if (input.trim() !== "") {
                  setNotes((prevNotes) => {
                    return [...prevNotes, input];
                  });
                  setInput("");
                }
              }}
            >
              Add Note
            </button>
          </div>

          <StickyNotes notes={notes} setNotes={setNotes} />
          <Link to="view">
            <div className="text-amber-700  hover:text-amber-800 pt-2">
              <button className="underline">Veiw All</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Component;
