// Component to display the note card

import { MdDeleteForever, MdEditNote } from "react-icons/md";

const Note = ({ id, title, content, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span className="note-title">{title}</span>
      <p className="note-content">{content}</p>
      <div className="note-actions">
        <span className="note-date">{date}</span>
        <div className="action-buttons">
          <MdEditNote className="edit-icon" size={20} />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
