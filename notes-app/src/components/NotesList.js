import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="notes-list">
      {notes.length === 0 && (
        <div className="empty-notes">
          <p>No notes found. Add your first note!</p>
        </div>
      )}

      {notes.map((note) => (
        <Note
          key={note.id}
          {...note}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
