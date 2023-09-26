import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getBookings = createAsyncThunk('booking/getBookings',async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/bookings");
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getBookingOne = createAsyncThunk('booking/getOne',async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/bookings/"+id);
        const data = await res.json()
        return data;
    }catch(error){
        rejectWithValue(error.message);
    }
})

export const insertBooking = createAsyncThunk('booking/insertBooking',async(bookingdata,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/bookings",{
            method:"POST",
            body: JSON.stringify(bookingdata),
            headers:{
                'Content-type':'application/json; charset = UTF-8'
            }
        });
        const data = await res.json();
        return data;

    }catch(error){
        rejectWithValue(error.message)
    }
})

export const updateBooking = createAsyncThunk('booking/updatebookingdata',async(
    bookingdata,
    thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        
        const res = await fetch("http://localhost:3005/bookings/"+bookingdata.id,{
            method:"PUT",
            body: JSON.stringify(bookingdata),
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json; charset = UTF-8'
            }
        });
        const data = await res.json();
        return data;
    }catch(error){
        rejectWithValue(error.message)
    }
})

export const deleteBooking = createAsyncThunk('booking/deleteBooking',async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/bookings/"+id,{
            method:"DELETE",
        })
        return id;
    }catch(error){
        rejectWithValue(error.message)
    }
})

const BookingSlice = createSlice({
    name:"booking",
    initialState:{isLoading:false,bookings:[],error:null },
    extraReducers:{
        [getBookings.pending]: (state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getBookings.fulfilled]: (state,action)=>{
            state.bookings = action.payload;
            state.isLoading = false;
        },
        [getBookings.rejected]: (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [insertBooking.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [insertBooking.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.bookings.push(action.payload);
            // console.log(action.payload.id);
        },
        [insertBooking.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [getBookingOne.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getBookingOne.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.bookings = action.payload;
        },
        [getBookingOne.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateBooking.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [updateBooking.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.bookings[action.payload.id] = action.payload;
        },
        [updateBooking.rejected]:(state,action)=>{
            console.log("error")
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteBooking.pending]: (state,action)=>{
            state.isLoading = true;
            state.error = false;
        },
        [deleteBooking.fulfilled]: (state,action)=>{
            state.isLoading = false;
            state.bookings = state.bookings.filter(element=> element.id !== action.payload);
        },
        [deleteBooking.rejected]: (state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})
export default BookingSlice.reducer;