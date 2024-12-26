import React from "react";
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

const castDetails = ({ person, personCredit }) => {  // Don't miss this!

  return (
    <>
      <Typography variant="h5" component="h3">
        Inroduction
      </Typography>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Name" sx={{...chip}} color="primary" />
        </li>
        <li>
          <Chip label={person.name} sx={{...chip}} />
        </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Birthday" sx={{...chip}} color="primary" />
        </li>
        <li>
          <Chip label={person.birthday} sx={{...chip}} />
        </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Place_of_birth" sx={{...chip}} color="primary" />
        </li>
        <li>
          <Chip label={person.place_of_birth} sx={{...chip}} />
        </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Known_for_department" sx={{...chip}} color="primary" />
        </li>
        <li>
          <Chip label={person.known_for_department} sx={{...chip}} />
        </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="also_known_as" sx={{...chip}} color="primary" />
        </li>
        <li>
          <Chip label={person.also_known_as} sx={{...chip}} />
        </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Movies" sx={{...chip}} color="primary" />
        </li>
        {personCredit.cast.map((g) => (
          <li >
            <Link to={`/movies/${g.id}`}><Chip label={g.title} sx={{...chip}} /></Link>
          </li>
        ))}
      </Paper>
      </>
  );
};
export default castDetails; 