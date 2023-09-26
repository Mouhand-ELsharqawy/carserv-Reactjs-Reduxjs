import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 
export const getTechnician = createAsyncThunk('technician/insertTehnician',async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = res.json()
        return data;
    }catch(error){
        rejectWithValue(error.message)
    }
})

const technicianSlice = createSlice({
    name:"technician",
    initialState:{isLoading:false, technicians:[], error:null },
    extraReducers:{
        [getTechnician.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getTechnician.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.technicians = action.payload;
        },
        [getTechnician.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default technicianSlice.reducer;