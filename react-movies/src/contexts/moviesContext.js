import React, { useState } from "react";
import { addFavorite, deleteFavorite } from "../api/movies-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState( [] )

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToFavorites = async (movie) => {
    try{
      await addFavorite({userId: "123", movieId: movie.id, movieTitle: movie.title});
      setFavorites((prev) => [...prev, movie.id]);
    } catch(e){
      console.log("Error adding to favorites", e.message);
    }
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
      // console.log(newMustWatch);
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setMustWatch(newMustWatch)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = async (movie) => {
    try{
      await deleteFavorite({userId: "123", movieId: movie.id});
      setFavorites((prev) => prev.filter((mId) => mId !== movie.id));
    } catch(e){
      console.log("Error removing from favorites", e.message);
    }
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;