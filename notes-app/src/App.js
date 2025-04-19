import NoteList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("react-notes-app-data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load notes from local storage when the component mounts
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      content: content,
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id, updatedTitle, updatedContent) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: updatedTitle,
          content: updatedContent,
          lastUpdated: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          isEdited: true,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter(
            (note) =>
              note.title.toLowerCase().includes(searchText.toLowerCase()) ||
              note.content.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
  );
};

export default App;
