import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateTrendingMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatch from "../components/cardIcons/addToMustWatch";

const TrendingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('TrendingMovies', getTrendingMovies)
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatch movie={movie} />
      }}
    />
  );
};
export default TrendingMoviesPage;