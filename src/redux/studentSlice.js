import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllStudents } from "../services/allApis"


export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const response = await fetchAllStudents()
    return response
}) 

const studentSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        loading:false,
        error:""
    },
    extraReducers: (builder) => {

        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.students = action.payload.data
            state.loading=false
        })

        builder.addCase(fetchStudents.pending, (state, action) => {
            state.students = []
            state.loading=true
        })

        builder.addCase(fetchStudents.rejected, (state, action) => {
            state.students = []
            state.loading=false
            state.error="Api Call Failed!!"
        })
    }
})

export default studentSlice.reducer