import { useState } from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

const Note = ({
  id,
  title,
  content,
  date,
  lastUpdated,
  isEdited,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleSaveEdit = () => {
    handleEditNote(id, updatedTitle, updatedContent);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div className="edit-note">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="note-title"
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className="note-content"
            rows="8"
            cols="10"
          />
          <div className="note-actions">
            <span className="note-date">{date}</span>
            <div className="edit-buttons">
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <span className="note-title">{title}</span>
          <p className="note-content">{content}</p>
          <div className="note-actions">
            <div className="note-dates">
              <span className="note-date">Created: {date}</span>
              {isEdited && (
                <span className="note-updated">Updated: {lastUpdated}</span>
              )}
            </div>
            <div className="action-buttons">
              <MdEditNote
                onClick={() => setIsEditing(true)}
                className="edit-icon"
                size={20}
              />
              <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className="delete-icon"
                size={20}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
