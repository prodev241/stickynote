import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const StickyNotes = ({ notes, setNotes }) => {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-4 ">
      {notes.map((note, index) => (
        <li
          className="relative bg-amber-100 rounded border-amber-600 border-t-amber-200 border-b-amber-400 w-[200px] h-[190px] p-2"
          key={index}
        >
          {`${index + 1} ${note} `}
          <button
            className="absolute top-2 right-2 text-amber-600 hover:text-red-600 z-10"
            onClick={() =>
              setNotes(notes.slice(0, index).concat(notes.slice(index + 1)))
            }
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className="absolute bottom-2 right-2 text-amber-600 hover:text-red-600 z-10"
            onClick={() => {
              const newNote = prompt("Edit your note:", note);
              if (newNote !== null && newNote.trim() !== "") {
                setNotes(notes.map((n, i) => (i === index ? newNote : n)));
              }
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default StickyNotes;
