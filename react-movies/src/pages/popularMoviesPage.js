import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templatePopularMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatch from "../components/cardIcons/addToMustWatch";

const PopularMoviesPage = (props) => {
    
  const {  data, error, isLoading, isError }  = useQuery('popularMovies', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatch movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;