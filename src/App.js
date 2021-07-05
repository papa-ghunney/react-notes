import NotesList from "./components/NotesList";
import React, { useState } from 'react';
import Search from "./components/Search";
import Header from "./components/Header";
import { useGlobalContext } from './context/NotesContext'

function App() {
  const [searchText, setSearchText] = useState("")

  const [darkMode, setDarkMode] = useState(false)
  const { notes } = useGlobalContext();

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.includes(searchText))} />
      </div>
    </div>
  );
}



export default App;
