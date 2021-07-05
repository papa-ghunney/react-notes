import React from "react";
import Note from "./Note";
import { useGlobalContext } from "../context/NotesContext";
import AddNote from "./AddNote";

export default function NotesList({ notes }) {
  const { addNote } = useGlobalContext();

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote handleAddNote={addNote} />
    </div>
  );
}
