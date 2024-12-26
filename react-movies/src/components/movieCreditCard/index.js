import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieCreditCard = ({ movie }) => {  // Don't miss this!

  return (
    <>
      <Typography variant="h5" component="h3">
        Cast of the movie
      </Typography>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Cast" sx={{...chip}} color="primary" />
        </li>
        {movie.cast.map((g) => (
          <li >
            <Link to={`/person/${g.id}`}><Chip label={g.name} sx={{...chip}} /></Link>
          </li>
        ))}
      </Paper>
      <Typography variant="h5" component="h3">
        Crew of the movie
      </Typography>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        {movie.crew.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      </>
  );
};
export default MovieCreditCard ;