import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

export default function TrendingMovieCard({ movie, action }) {
  const { mustWatch, addToMustWatch } = useContext(MoviesContext);

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false;
  }

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    addToMustWatch(movie);
  }

  return (
    <Card>
      <CardHeader
        avatar={
          movie.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
          
          {action(movie)}
  
          <Link to={`/movies/${movie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>

      </CardActions>
    </Card>
  );
}