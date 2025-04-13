import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const charLimit = 300; // Set a character limit for the note content

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (charLimit - event.target.value.length >= 0) {
      if (name === "title") {
        setNoteTitle(value);
      } else {
        setNoteContent(value);
      }
    }
  };

  const handleSaveClick = () => {
    if (noteTitle.trim() && noteContent.trim()) {
      handleAddNote(noteTitle, noteContent);
      setNoteTitle(""); // Clear the title input after saving
      setNoteContent(""); // Clear the textarea after saving
    } else {
      alert("Please fill in both title and content.");
    }
  };

  const handleCancelClick = () => {
    setNoteTitle(""); // Clear the title input when canceling
    setNoteContent(""); // Clear the textarea when canceling
  };

  return (
    <div className="note add-note">
      <input
        className="note-title"
        type="text"
        placeholder="Note Title"
        value={noteTitle}
        name="title"
        onChange={handleChange}
      ></input>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteContent}
        name="content"
        onChange={handleChange}
      ></textarea>
      <div className="add-note-actions">
        <span className="note-count">
          {noteContent.length}/{charLimit}
        </span>
        <div className="action-buttons">
          <button className="action-button" onClick={handleSaveClick}>
            Add new note
          </button>
          <button className="action-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
