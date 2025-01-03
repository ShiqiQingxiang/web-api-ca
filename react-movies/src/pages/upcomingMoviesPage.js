import React from "react";
import { getUpcomingMovies } from "../api/movies-api";
import PageTemplate from '../components/templateUpcomingMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatch from "../components/cardIcons/addToMustWatch";


const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcomingMovies', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        // return <AddToFavoritesIcon movie={movie} />
        return <AddToMustWatch movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;