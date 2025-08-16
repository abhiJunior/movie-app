import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='w-full h-auto md:h-20 flex flex-col md:flex-row justify-evenly items-center space-y-3 md:space-y-0'>
        <div className='text-3xl md:text-4xl text-red-600 underline underline-offset-4'>
          <Link to="/">Movies App</Link>
        </div>
        <div className='text-3xl md:text-4xl text-red-600 underline underline-offset-4'>
          <Link to='/favourite'> Favourites</Link>
        </div>
        {/* <div className='text-3xl md:text-4xl text-red-600 underline underline-offset-4'>
          <Link to='/addmovie'> Add Movie</Link>
        </div> */}
      </div>
    </div>
  )
}

export default Header
