import React, { createContext, useState } from "react";


export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {

    const exist = favorites.find((item) => item.id === product.id);

    if (!exist) {
      setFavorites([...favorites, product]);
    }

  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};