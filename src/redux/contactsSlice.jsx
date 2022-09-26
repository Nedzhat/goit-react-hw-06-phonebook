import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [
    { id: '1', name: 'vova', number: '023598395' },
    { id: '2', name: 'misha', number: '252897522' },
    { id: '3', name: 'alex', number: '38457285' },
    { id: '4', name: 'dima', number: '243563735' },
    { id: '5', name: 'artem', number: '259295275' }
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.unshift(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },

        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;