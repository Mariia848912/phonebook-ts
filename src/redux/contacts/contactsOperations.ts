import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/apiService";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await api.fetchContacts();
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(
                console.log(error)
            )
        }
    }
)