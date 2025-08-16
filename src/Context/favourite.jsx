import { createContext, useState } from "react";

const FavouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  return (
    <FavouriteContext.Provider value={{ favourite, setFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteContext }; // ✅ named export
export default FavouriteProvider; // ✅ default export
