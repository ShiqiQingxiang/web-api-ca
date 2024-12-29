export const getGenres = async() => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
};

export const getMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movies`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/upcoming`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getPopularMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/popular`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getTrendingMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/trending`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getMovieReviews = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
} 

export const getMovieImages = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/images`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getMovieCredits = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/credits`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getPersonImages = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}/images`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getPerson = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const getPersonCredits = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}/movie_credits`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}