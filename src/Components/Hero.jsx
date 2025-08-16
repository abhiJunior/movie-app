import React from 'react'

function Hero() {
  return (
    <div className='px-4'>
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat rounded-xl bg-[url(https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2025/02/Superman-2025-Official-Teaser-Trailer.jpg)]'>
        
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl'></div>
        
        {/* Content */}
        <h1 className='absolute bottom-24 sm:bottom-28 md:bottom-32 text-2xl sm:text-3xl md:text-5xl left-3 sm:left-4 md:left-5 text-white font-bold z-10'>
          Superman
        </h1>
        <p className='absolute bottom-6 sm:bottom-10 md:bottom-14 left-3 sm:left-4 md:left-5 text-xs sm:text-sm md:text-base text-white font-serif max-w-[90%] md:max-w-[70%] z-10'>
          In his signature style, James Gunn takes on the original superhero in the newly imagined DC universe with a singular blend of epic action,
          humor and heart, delivering a Superman who`s driven by compassion and an inherent belief in the goodness of humankind.
        </p>
      </div>
    </div>
  )
}

export default Hero
