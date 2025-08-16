import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Favourites from './Components/Favourites';
import AddMovie from './Components/addMovie';
import MovieDetail from './Components/MovieDetail';
import FavouriteProvider from './Context/favourite';
import { useState } from 'react';

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <FavouriteProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourite' element={<Favourites  />} />
            <Route path='/moviedetail/:imdb_id' element={<MovieDetail/>}/>
            {/* <Route path='/addmovie' element={<AddMovie/>}/> */}
          </Routes>
        </FavouriteProvider>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
