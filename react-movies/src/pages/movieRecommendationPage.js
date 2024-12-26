import React from "react";
import { getMovieRecommendations } from "../api/tmdb-api";
import PageTemplate from '../components/templateUpcomingMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatch from "../components/cardIcons/addToMustWatch";


const MovieRecommendationPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('Recommended Movies', getMovieRecommendations)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data;
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={movies}
      action={(movie) => {
        // return <AddToFavoritesIcon movie={movie} />
        return <AddToMustWatch movie={movie} />
      }}
    />
  );
};
export default MovieRecommendationPage;