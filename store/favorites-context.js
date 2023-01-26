import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavotite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavotiteHandler(id) {
    setFavoriteMealIds((currentIds) => [...currentIds, id]);
  }

  function removeFavoriteHandler(id) {
    setFavoriteMealIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavotite: addFavotiteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;