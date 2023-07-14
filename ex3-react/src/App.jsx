import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [day, setDay] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    { day: 7, note: "Imparare Svelte" },
    { day: 10, note: "Creare Vite 2.0" },
    { day: 16, note: "Sistemare Cicalino" },
    { day: 22, note: "Abolire le campane" },
    { day: 30, note: "Meeting con la gang di Michele" },
  ]);

  function generateNotes() {
    const generatedNotes = [];
    for (let i = 1; i <= 31; i++) {
      if (notes.find((n) => n.day === i)) {
        generatedNotes.push(notes.find((n) => n.day === i));
      } else {
        generatedNotes.push({ day: i, note: "" });
      }
    }
    return generatedNotes;
  }

  function handleInsertNote() {
    const updatedNotes = [...notes];
    const existingNoteIndex = notes.findIndex((n) => n.day === parseInt(day));

    if (existingNoteIndex !== -1) {
      updatedNotes[existingNoteIndex].note = note;
    } else {
      updatedNotes.push({ day: parseInt(day), note });
    }

    setNotes(updatedNotes);
    setDay("");
    setNote("");
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex  flex-col items-center ">
        <img src="/img/sun-glasses.png" className=" h-14" alt="" />
        <h1 className="text-3xl font-bold text-center mb-8">Calendar App</h1>
      </div>
      <div className="flex justify-center mb-8">
        <input
          type="number"
          className="border border-gray-300 rounded-md py-2 px-5 mr-4"
          placeholder="Day"
          min={1}
          max={31}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-3 mr-4"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleInsertNote}
        >
          Insert Note
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 drop-shadow-lg ">
        {generateNotes().map((n) => (
          <Note key={n.day} day={n.day} note={n.note} />
        ))}
      </div>
    </div>
  );
}

export default App;
