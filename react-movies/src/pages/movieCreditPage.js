import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-api'
import { getMovieCredits } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import MovieCreditCard from "../components/movieCreditCard";
// import useMovie from "../hooks/useMovie";   Redundant

const MovieCreditPage = (props) => {
  const { id } = useParams();

  const { data: movies} = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: movie, error, isLoading, isError } = useQuery(
    ["credit", { id: id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movies}>
            <MovieCreditCard movie={movie} />
        
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie credits</p>
      )}
    </>
  );
};

export default MovieCreditPage;