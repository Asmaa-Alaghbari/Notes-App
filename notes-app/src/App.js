import NoteList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(), // Generate a unique ID for each note
      title: "Note 1",
      content: "This is the content of Note 1.",
      date: "2025-01-01",
    },
    {
      id: nanoid(),
      title: "Note 2",
      content: "This is the content of Note 2.",
      date: "2025-01-02",
    },
    {
      id: nanoid(),
      title: "Note 3",
      content: "This is the content of Note 3.",
      date: "2025-01-03",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (title, content) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      content: content,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter(
          (note) =>
            note.title.toLowerCase().includes(searchText.toLowerCase()) ||
            note.content.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
