import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

    export const getTestimonials = createAsyncThunk('testimonials/getTestimonials',
    async(_,
        thunkAPI)=>{
        const { rejectWithValue } = thunkAPI;
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            return data;
        }catch(error){
            rejectWithValue(error.message);
        }
    })

    const testimonialSlice = createSlice({
        name:"testimonials",
        initialState:{ isLoading:false, testimonials:[], error:null },
        extraReducers:{
            [getTestimonials.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
            },
            [getTestimonials.fulfilled]:(state,action)=>{
                state.isLoading = false;
                state.testimonials = action.payload;
            },
            [getTestimonials.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
            },
        }
    })

export default testimonialSlice.reducer ;