import React, { useState, useEffect } from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { imdb_id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetail() {
    const url = `https://tvshow.p.rapidapi.com/Movie/Detail?Items=${imdb_id}&Language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_MOVIEDETAIL_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setDetail(result[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6">
        Movie Detail
      </h1>
      
      {loading ? (
        <p className="text-center text-gray-400 text-sm sm:text-base">Loading...</p>
      ) : (
        <div className="flex justify-center">
          <Detail key={imdb_id} detail={detail} />
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
