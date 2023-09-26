import { configureStore } from "@reduxjs/toolkit";
import bookings from "./BookingSlice";
import testimonials from "./testmonialSlice";
import contacts from './contactSlice';
import technicians from './TechnicianSlice';
const store = configureStore({
    reducer:{
        bookings,
        testimonials,
        contacts,
        technicians
    }
})
export default store;