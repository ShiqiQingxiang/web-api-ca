# Assignment 2 - Web API.

Name: Shiqi Qingxiang

Student Number: 20108873

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + New API endpoints  can fetch from TMDB, such as Geners, UpcomingMovies, PopularMovies. 
 + New API endpoints including parameterised URL can fetch from TMDB, such as MovieImages, MovieReviews, MovieCredits, PersonImages, PersonCredits.
 +  New API endpoints can fetch from MongoDB, such as FavoriteMovies. It can add, get and delete.
 +  Mostly integrated. All fetches from frontend app go to the web API (except FavoriteMovies and MustWatchMovies).
 + Add register and login functionality. If it fails, error messages displayed on frontend 

## Setup requirements.

`node.js`:  v18.18.1

`npm`: 10.9.2

```bash
https://github.com/ShiqiQingxiang/web-api-ca.git

cd ./web-api-ca/movies-api
npm install
# You need configure the .env file
npm run dev

cd ./web-api-ca/react-movies
npm install
# You need configure the .env file
npm start
```



## API Configuration

**movies-api:**

```
NODE_ENV=development
PORT=8080
HOST=localhost

MONGO_DB= MONGO_URL
TMDB_KEY= TMDB_JWT_TOKEN
SECRET= secret
```

**react-movies:**

```
REACT_APP_TMDB_KEY= YOUR_TMDB_KEY
FAST_REFRESH=false
```

______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/movies | GET | Gets a list of movies 
- /api/movies/tmdb/genres | GET | Gets details of genres 
- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies 
- /api/movies/tmdb/popular | GET | Gets a list of popular movies 
- /api/movies/tmdb/trending | GET | Gets a list of trending movies 
- /api/movies/{movieid} | GET | Gets a single movie from MongoDB
- /api/movies/tmdb/movie/{movieid} | GET | Gets a single movie 
- /api/movies/tmdb/movie/{movieid}/images | GET | Gets a single movie's image
- /api/movies/tmdb/movie/{movieid}/credits | GET | Gets a single movie's credits
- /api/movies/tmdb/movie/{movieid}/reviews | GET | Gets all reviews for a movie 
- /api/movies/tmdb/person/{personid}/images | GET | Gets a single person's image
- /api/movies/tmdb/person/{personid} | GET | Gets a single person
- /api/movies/tmdb/person/{personid}/movie_credits | GET | Gets a single person 
- /api/movies/favourite | POST | Posts a movie to favorite
- /api/movies/favourite/{userid} | POST | Gets a movie from favorite
- /api/movies/favourite/{userid}/{movieid} | DELETE | Deletes a movie from favorite
- /api/users | POST | Login
- /api/users?action=register | POST | Register

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

- Utilize a username and password for authentication to receive a `JWT` token, which is required to access protected routes.
- Every request to secured routes must include an `Authorization` header containing the `Bearer` token, which will be verified using JWT.
- Passwords will be securely hashed and salted before being stored in the database.
- Both signup and login functionalities are accessible via the site header.
- If the username is not found or the password is incorrect, an appropriate error message will be returned.
- All profiles are secured and accessible only to authenticated users. Login is mandatory for viewing profile information. (except `/api/users` ,`/api/users?action=register`, they can be visited when not login)

## Integrating with React App

- All requests have been shifted to the Web API. (except FavoriteMovies, MustWachMovies and user's personal reviews like adding and getting) 
- Add a login/register page to allow users to login/register.

## Independent learning (if relevant)

