import {fetchContacts} from './contactsOperations'
import { createSlice } from '@reduxjs/toolkit'

interface ContactsState {
    items: [],
  isLoading: boolean,
  error: null | string,
}
const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => { 
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
           state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    } )    
    }
})

export const contactsReducer = contactsSlice.reducer;