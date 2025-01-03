export const getGenres = async() => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
    }
    )
    return response.json();
};

export const getMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movies`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
    }
  );
  return response.json();
}

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/upcoming`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}` 
      }
    }
  );
  return response.json();
}

export const getPopularMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/popular`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
    }
  );
  return response.json();
}

export const getTrendingMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/trending`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
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
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
    }
  );
  return response.json();
}

export const addFavorite = async (favourite) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/favourite`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      },
      body: JSON.stringify(favourite)
    }
  );
  return response.json();
}

export const getFavorites = async (userId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/favourite/${userId}`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
    }
  );
  return response.json();
}

export const deleteFavorite = async (userId, movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/favourite/${userId}/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      }
    }
  );
  return response.json();
}

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  const token = data.token.split(" ")[1]; 
  window.localStorage.setItem('token', token);
  return token;
};

export const register = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  if (!response.ok) {
    throw new Error('Register failed');
  }
  return response.json();
};