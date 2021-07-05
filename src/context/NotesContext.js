import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import { notesData } from "../data/notesData";
import { ADD_NOTE, DELETE_NOTE } from './types'
const NotesContext = createContext()

const initialState = {
    notes: localStorage.getItem("react-notes") ? JSON.parse(localStorage.getItem("react-notes")) : notesData
}

const NotesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addNote = (text) => {
        dispatch({ type: ADD_NOTE, payload: text })
    }

    const deleteNote = (id) => {
        dispatch({ type: DELETE_NOTE, payload: id })
    }

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("react-notes"))
        if (savedNotes) {
            return {
                state: savedNotes
            }
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("react-notes", JSON.stringify(state.notes))
    }, [state.notes])


    return (
        <NotesContext.Provider value={{
            notes: state.notes,
            addNote,
            deleteNote,
            dispatch
        }}>
            {children}
        </NotesContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(NotesContext)
}

export default NotesProvider;