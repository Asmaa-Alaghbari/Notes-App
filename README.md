# Notes App

**Capture, Organize, and Retrieve Your Thoughts Effortlessly!**

A React-based web application designed to help users create, manage, and search through personal notes. Create rich text notes, organize them efficiently, and toggle between light/dark themes. Perfect for students, professionals, and anyone who needs quick note-taking capabilities.

## Table of Contents

- [Project Details](#project-details)
- [Features](#features)
- [How to Use](#how-to-use)
- [Requirements](#requirements)
- [Code Structure](#code-structure)
- [References](#references)

## Project Details

- **Start Date**: 13/04/2025
- **Last Update**: 19/04/2025
- **Programming Language**: JavaScript (React)
- **Tools Used**: VS Code, npm
- **App Type**: Web Application (PWA compatible)
- **Theme**: Light/Dark Mode Toggle
- **Data Persistence**: LocalStorage

## Features

✅ **Rich Note Creation** - Title + content with character counter  
✅ **Instant Search** - Filter notes by title or content  
✅ **Dark/Light Mode** - Eye-friendly theme switching  
✅ **CRUD Operations** - Create, Read, Delete functionality  
✅ **Responsive Grid** - Adapts to all screen sizes  
✅ **Local Storage** - Notes persist between sessions

## How to Use

### Installation

1. Clone the repository:

```bash
git https://github.com/Asmaa-Alaghbari/Notes-App
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

### Usage Guide

**Home Screen**:

- Displays all notes in a responsive grid
- Empty state shows the "Add Note" component

**Adding a Note**:

1. Click the "Add Note" card
2. Enter:
   - Title (Required)
   - Content (300 character limit)
3. Save with "Add" or cancel with "Clear"

**Searching Notes**:

- Type in the search bar to instantly filter notes

**Deleting Notes**:

- Click the 🗑️ (Delete) icon on any note
- Confirmation dialog appears (planned enhancement)

**Theme Toggle**:

- Click the "Toggle Mode" button in header

## Requirements

- Node.js (v16+)
- npm (v8+)
- Modern web browser (Chrome/Firefox/Edge)

## Code Structure

| File/Component            | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `App.js`                  | Main component with state management and localStorage integration |
| `components/Header.js`    | App title and dark mode toggle button                             |
| `components/Search.js`    | Search input field with icon                                      |
| `components/NotesList.js` | Container for rendering note cards and AddNote component          |
| `components/Note.js`      | Individual note card with delete functionality                    |
| `components/AddNote.js`   | Form for creating new notes with validation and character limit   |
| `index.css`               | Global styles with dark mode support                              |

## Key Functions

| Function             | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `addNote()`          | Creates new notes with auto-generated ID and timestamp |
| `deleteNote()`       | Removes notes from state and localStorage              |
| `handleSearchNote()` | Filters notes based on search query                    |
| `handleChange()`     | Controls form input with character limit enforcement   |

## References

- [Chris Blakely](https://www.youtube.com/watch?v=8KB3DHI-QbM&ab_channel=ChrisBlakely) - Original tutorial for the Notes App
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official React documentation for best practices
