import {configureStore} from "@reduxjs/toolkit";
import movielistReducer from "./movielistReducer"
import favouriteReducer from './favouriteReducer'
const store = configureStore({
    reducer :{
        movielist : movielistReducer,
        favourite : favouriteReducer
    }
})

export default store