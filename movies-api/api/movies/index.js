import movieModel from './movieModel';
import favouriteModel from './favouriteModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies, getMovies, getPerson, getPersonCredits,
    getPopularMovies, getTrendingMovies, getMovie, getMovieImages, getMovieReviews, getMovieCredits, getPersonImages
  } from '../tmdb-api';
import { getGenres } from '../tmdb-api';  

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.post('/favourite', asyncHandler(async (req, res) => {
    const { movieId, userId, movieTitle } = req.body;

    if (!movieId || !userId || !movieTitle) {
        return res.status(400).json({message: 'Some required fields are missing.'});
    }

    const favourite = new favouriteModel({ movieId, userId, movieTitle });
    await favourite.save();

    res.status(201).json(favourite);
}));

router.get('/favourite/:userId', asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const favourites = await favouriteModel.find({ userId });
    res.status(200).json(favourites);
}));

router.delete('/favourite/:userId/:movieId', asyncHandler(async (req, res) => {
    const { userId, movieId } = req.params;
    const favourite = await favouriteModel.findOneAndDelete({ userId, movieId });
    if (favourite) {
        res.status(200).json(favourite);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getMovieImages(id);
    if (images) {
        res.status(200).json(images);
    } else {
        res.status(404).json({message: 'The images you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await getMovieReviews(id);
    if (reviews) {
        res.status(200).json(reviews);
    } else {
        res.status(404).json({message: 'The reviews you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/movie/:id/credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const credits = await getMovieCredits(id);
    if (credits) {
        res.status(200).json(credits);
    } else {
        res.status(404).json({message: 'The credits you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/person/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getPersonImages(id);
    if (images) {
        res.status(200).json(images);
    } else {
        res.status(404).json({message: 'The images you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/person/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const person = await getPerson(id);
    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({message: 'The person you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/person/:id/movie_credits', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const credits = await getPersonCredits(id);
    if (credits) {
        res.status(200).json(credits);
    } else {
        res.status(404).json({message: 'The credits you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const topRated = await getMovies();
    res.status(200).json(topRated);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const genres = await getPopularMovies();
    res.status(200).json(genres);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const genres = await getTrendingMovies();
    res.status(200).json(genres);
}));

export default router;
