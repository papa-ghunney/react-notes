import { v4 as uuidv4 } from "uuid";
import { ADD_NOTE, DELETE_NOTE } from './types'

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_NOTE:
            const date = new Date();
            const newNote = {
                id: uuidv4(),
                text: action.payload,
                date: date.toLocaleDateString(),
            };
            return {
                ...state,
                notes: [...state.notes, newNote]
            }
        case DELETE_NOTE:
            const newNotes = state.notes.filter((note) => note.id !== action.payload);
            return {
                ...state,
                notes: newNotes
            }
        default:
            return state;
    }
}

export default reducer;
