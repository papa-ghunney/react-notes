import React from "react";
import { useGlobalContext } from "../context/NotesContext";
import { MdDeleteForever } from "react-icons/md";
const Note = ({ note }) => {
  const { deleteNote } = useGlobalContext();

  const { id, text, date } = note;
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.4em"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
