import React from 'react'
import { useContext } from 'react'
import { setFavourite} from '../Store/favouriteReducer'
import { useDispatch } from 'react-redux'
import { FavouriteContext } from '../Context/favourite'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  const dispatch = useDispatch()
  // const {setFavourite} = useContext(FavouriteContext)
  const handleFavourite = ()=>{
    const new_value = movie
    dispatch(setFavourite(new_value))
  }
  return (
    <div className=' w-56 h-72 relative bg-cover bg-center bg-no-repeat rounded-xl' style={{backgroundImage: `url(${movie.image})`}}>
        <h3 className=' absolute text-white left-4 top-4'><Link to={`/moviedetail/${movie.id}`}>  {movie.title}</Link></h3>
        <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded text-sm  pt-[5px] pl-[10px] text-center cursor-pointer' onClick={handleFavourite}>Add to Favourites</button>
    </div>
  )
}

export default MovieCard
