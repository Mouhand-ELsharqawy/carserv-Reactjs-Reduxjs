import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const insertContacts = createAsyncThunk('contact/insertContacts',async(contactData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/contacts",{
            method:"POST",
            body: JSON.stringify(contactData),
            headers:{
                'Content-type':'application/json; charset = UTF-8'
            }
        })
        const data = await res.json()
        return data;
    }catch(error){
        rejectWithValue(error.message)
    }
})

const contactSlice = createSlice({
    name:"contact",
    initialState:{ isLoading: false, contacts:[],error:null},
    extraReducers:{
        [insertContacts.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [insertContacts.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.contacts.push(action.payload);
            console.log("success")
        },
        [insertContacts.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default contactSlice.reducer;