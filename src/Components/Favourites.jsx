import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setselectedGenre,
  setfavouritelist,
  setsearchFav,
  setInitialFavLists,
  deleteMovie
} from "../Store/favouriteReducer"

function Favourites() {
  const favourite = useSelector((state) => state.favourite.favourites)
  const { selectedGenre, searchedFav, favouritelist } = useSelector((state) => state.favourite)
  const dispatch = useDispatch()

  const handleSearch = useCallback((e) => {
    const searchText = e.target.value.toLowerCase()
    dispatch(setfavouritelist({ type: "SEARCH", searchText }))
  }, [searchedFav])

  const filterfavlist = useCallback(() => {
    dispatch(setsearchFav())
    dispatch(setfavouritelist({ type: "CATEGORY" }))
  }, [favourite])

  const handleSort = useCallback((sorttype) => {
    dispatch(setfavouritelist({ type: "SORT", sorttype }))
  }, [searchedFav])

  const genreNames = useMemo(() => {
    return Array.from(
      new Set(
        favourite
          .map(item => item.genres?.[0])
          .filter(Boolean)
      )
    )
  }, [favourite])

  useEffect(() => {
    dispatch(setInitialFavLists())
  }, [dispatch])

  useEffect(() => {
    filterfavlist()
  }, [selectedGenre])

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      <h1 className="text-2xl sm:text-3xl text-white font-bold text-center mb-6">Favourites</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar - Genres */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-4">
          <h1
            className={`text-blue-600 p-2 border border-slate-500 rounded cursor-pointer text-center hover:bg-blue-500 hover:text-white transition ${selectedGenre === "" ? "text-white bg-blue-500" : ""}`}
            onClick={() => dispatch(setselectedGenre(""))}
          >
            All Genres
          </h1>
          <div className="flex flex-wrap lg:flex-col gap-2 mt-3">
            {genreNames?.map((genre) => (
              <h1
                key={genre}
                onClick={() => dispatch(setselectedGenre(genre))}
                className={`text-blue-600 px-3 py-2 border border-slate-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white transition text-sm sm:text-base ${selectedGenre === genre ? "text-white bg-blue-500" : ""}`}
              >
                {genre}
              </h1>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-4 overflow-x-auto">
          {/* Search */}
          <div className="mb-4">
            <input
              className="w-full sm:w-64 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Search by title"
              onChange={handleSearch}
            />
          </div>

          {/* Table */}
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left font-medium text-gray-700">Image</th>
                <th className="px-4 py-2 border border-gray-300 text-left font-medium text-gray-700">Title</th>
                <th className="px-4 py-2 border border-gray-300 text-left font-medium text-gray-700">Genre</th>
                <th className="px-4 py-2 border border-gray-300 text-left font-medium text-gray-700">
                  <span className="cursor-pointer" onClick={() => handleSort(true)}>↑</span> Popularity <span onClick={() => handleSort()} className="cursor-pointer">↓</span>
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left font-medium text-gray-700">Ratings</th>
                <th className="px-4 py-2 border border-gray-300 text-left font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favouritelist?.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 transition-all">
                  <td className="px-4 py-2 border border-gray-300">
                    <img src={item.image} alt="Movie Poster" className="h-14 w-10 sm:h-16 sm:w-auto rounded-md object-cover" />
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-800 font-semibold">{item.title}</td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-700">{item.genres[0]}</td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-700">{item.popularity}</td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-700">{item.voteAverage}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer text-xs sm:text-sm"
                      onClick={() => dispatch(deleteMovie(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Favourites
