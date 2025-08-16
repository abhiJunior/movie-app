import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:"favourite",
    initialState:{
        favourites : [],
        selectedGenre : "",
        favouritelist : [],
        searchedFav : []
        
        

    },
    reducers : {
        setInitialFavLists : (state)=>{
            state.favouritelist = state.favourites;
            state.searchedFav = state.favourites
        },
        setFavourite : (state,action)=>{
            const exists = state.favourites.some(item => item.id === action.payload.id)
            if (!exists){
                state.favourites.push(action.payload)
            }
            
        },
        setselectedGenre : (state,action) =>{
            state.selectedGenre = action.payload
        },

        setfavouritelist : (state,action)=>{
            const type = action.payload.type
            if (type === "SEARCH"){
                 if (action.payload.searchText.trim() === "") {
                    state.favouritelist = state.searchedFav; // reset list when input is empty
                } else {
                const filtered = state.searchedFav.filter(movie =>
                    movie.title.toLowerCase().includes(action.payload.searchText)
                );
                state.favouritelist = filtered
                
                } 

            }
            if (type === 'SORT'){
                const filterfavlist = state.searchedFav.sort((a,b)=>action.payload.sorttype? b.popularity - a.popularity : a.popularity - b.popularity)
                state.favouritelist = filterfavlist
            }

            if (type === "CATEGORY"){
                state.favouritelist = state.searchedFav
            }
           
        },

        setsearchFav : (state,action)=>{
            state.searchedFav = state.selectedGenre ? state.favourites.filter((movie)=> movie.genres?.[0] === state.selectedGenre) : state.favourites
            

        },

        deleteMovie : (state,action)=>{
            state.searchedFav = state.searchedFav.filter((movie)=> movie.id !== action.payload)
            state.favouritelist = state.favouritelist.filter((movie)=> movie.id !== action.payload)
            state.favourites = state.favourites.filter((movie)=> movie.id !== action.payload)
        }
        

        
    }
})

export const  {setFavourite,setselectedGenre , setfavouritelist, setsearchFav,setInitialFavLists,deleteMovie} = favouriteSlice.actions
export default favouriteSlice.reducer;