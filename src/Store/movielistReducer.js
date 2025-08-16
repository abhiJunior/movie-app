import { createSlice } from "@reduxjs/toolkit";

const movielistSlice = createSlice({
    name : "movielist",
    initialState:{
        activePage : 1,
        pageMemoization : {}
    },
    reducers : {
        setActivePage : (state,action) =>{
            state.activePage = action.payload
        },
        setPageMemoization : (state,action) =>{
            state.pageMemoization[state.activePage] = action.payload
        }
    }
})

export const {setActivePage,setPageMemoization} = movielistSlice.actions
export default movielistSlice.reducer;