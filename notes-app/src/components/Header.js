import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes App</h1>
      <p>Keep track of your notes!</p>
      <button
        onClick={() => handleToggleDarkMode((prevMode) => !prevMode)}
        className="action-button"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
