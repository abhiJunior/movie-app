import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage, setPageMemoization } from '../Store/movielistReducer';
import Pagination from './Pagination';

function MovieList() {
  const { activePage, pageMemoization } = useSelector((state) => state.movielist);
  const dispatch = useDispatch();

  const fetchMovies = async (page = 1) => {
    dispatch(setActivePage(page));
    if (pageMemoization[page]) {
      return;
    }
    const url = `https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=${page}&Language=en-US&Adult=true`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '5ffeb783e1mshfab84f8269795acp1190bajsn64c42d2ae78f',
        'x-rapidapi-host': 'tvshow.p.rapidapi.com',
        Type: 'get-trending-movies',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch(setPageMemoization(result));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies(activePage);
  }, [activePage]);

  return (
    <div className='mx-4 sm:mx-10 md:mx-20 mt-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5'>
        {pageMemoization[activePage]?.map((Movie) => {
          return <MovieCard key={Movie.id} movie={Movie} />;
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination fetchMovies={fetchMovies} />
      </div>
    </div>
  );
}

export default MovieList;
