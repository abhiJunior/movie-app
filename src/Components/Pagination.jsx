import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../Store/movielistReducer';

const getPageArray = (arrayLength, startNumber) => {
  return [...Array(arrayLength)].map((item, idx) => startNumber + idx + 1);
};

function Pagination({ fetchMovies }) {
  const dispatch = useDispatch();
  const { activePage } = useSelector((state) => state.movielist);
  const totalPageButton = 5;
  const pageArray = getPageArray(totalPageButton, 0);

  const [pages, setPages] = useState(pageArray);

  useEffect(() => {
    fetchMovies(activePage);
    if (activePage > pages[pages.length - 1]) {
      const startNumber = activePage - totalPageButton;
      const newPagesArray = getPageArray(totalPageButton, startNumber);
      setPages(newPagesArray);
    }

    if (activePage < pages[0]) {
      const startNumber = activePage - 1;
      const newPagesArray = getPageArray(totalPageButton, startNumber);
      setPages(newPagesArray);
    }
  }, [activePage]);

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 mt-7 p-3 bg-white rounded-lg shadow-sm">
      {/* Previous Page button */}
      <button
        type="button"
        onClick={() => dispatch(setActivePage(activePage - 1))}
        className={`px-3 py-1 border rounded-md text-sm sm:text-base ${
          activePage === 1
            ? 'opacity-50 cursor-not-allowed bg-gray-100'
            : 'hover:bg-blue-500 hover:text-white transition'
        }`}
        disabled={activePage === 1}
      >
        Prev
      </button>

      {/* Page numbers */}
      <div className="flex flex-wrap justify-center gap-2">
        {pages.map((item) => {
          const isSelected = item === activePage;
          return (
            <button
              type="button"
              key={item}
              onClick={() => dispatch(setActivePage(item))}
              className={`px-3 py-1 border rounded-md text-sm sm:text-base ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-black hover:bg-blue-400 hover:text-white'
              } transition`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Next page button */}
      <button
        type="button"
        onClick={() => dispatch(setActivePage(activePage + 1))}
        className={`px-3 py-1 border rounded-md text-sm sm:text-base ${
          activePage === 19
            ? 'opacity-50 cursor-not-allowed bg-gray-100'
            : 'hover:bg-blue-500 hover:text-white transition'
        }`}
        disabled={activePage === 19}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
