import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice"

const store=configureStore({
    reducer:{
        studentSlice
    }
})

export default store