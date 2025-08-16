import React from 'react'
import { FaRegStar } from "react-icons/fa";

function Detail({ detail }) {
  return (
    <div className="px-4 sm:px-8">
      {/* Hero section with background */}
      <div className="relative w-full h-auto md:h-[500px] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
           style={{ backgroundImage: `url(${detail.backdrop_path || detail.image})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
          {/* Poster */}
          <img 
            src={detail.image} 
            alt={detail.title} 
            className="h-[300px] w-[200px] sm:h-[350px] sm:w-[230px] md:h-[400px] md:w-[250px] rounded-xl shadow-lg"
          />

          {/* Text Info */}
          <div className="text-center md:text-left flex flex-col justify-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{detail.title}</h1>
            <h2 className="flex justify-center md:justify-start items-center text-lg sm:text-xl md:text-2xl text-white">
              <FaRegStar className="text-amber-500 mr-2" /> {detail.voteAverage}/10
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl text-white">{detail.runtime} min</h2>
          </div>
        </div>
      </div>

      {/* About Movie */}
      <div className="bg-white min-h-40 mt-6 rounded-lg shadow p-5">
        <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold">About Movie</h1>
        <p className="text-black text-sm sm:text-base font-serif mt-4 leading-relaxed">
          {detail.overview}
        </p>
      </div>
    </div>
  )
}

export default Detail
