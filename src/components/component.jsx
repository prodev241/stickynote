import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const component = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  console.log(notes);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
        <div className="bg-white p-6 rounded border-1 border-amber-600 border-t-amber-200 border-b-amber-400 shadow-md w-[700px] bg">
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
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors duration-300 text-[14px] whitespace-nowrap h-[44px] "
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

          <ul className="grid grid-cols-3 gap-4 mt-4 ">
            {notes.map((note, index) => (
              <li
                className=" relative bg-amber-100 rounded  border-amber-600 border-t-amber-200 border-b-amber-400 w-[200px] h-[190px] p-2 "
                key={index}
              >
                {`${index + 1} ${note} `}
                <button
                  className="absolute top-2 right-2 text-amber-600 hover:text-red-600 z-10"
                  onClick={() =>
                    setNotes(
                      notes.slice(0, index).concat(notes.slice(index + 1))
                    )
                  }
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="absolute bottom-2 right-2 text-amber-600 hover:text-red-600 z-10"
                onClick={() => {
                  const newNote = prompt("Edit your note:", note

                  );
                  if (newNote !== null && newNote.trim() !== "") {
                    setNotes(
                      notes.map((n, i) => (i === index ? newNote : n))
                    );}}}
                   >
                  <FontAwesomeIcon icon={faEdit} />

                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default component;
