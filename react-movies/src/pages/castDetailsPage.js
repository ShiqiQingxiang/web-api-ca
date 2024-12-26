import React from "react";
import { useParams } from 'react-router-dom';
import { getPersonCredits } from '../api/tmdb-api';
import { getPerson } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import CastDetails from "../components/castDetails";
import TemplatePersonPage from "../components/templatePersonPage";


const CastDetailsPage = (props) => {
  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  const { data: personCredit } = useQuery(
    ["Person's credit", { id: id }],
    getPersonCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <TemplatePersonPage person={person}>
            <CastDetails person={person} personCredit={personCredit} />
        
          </TemplatePersonPage>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default CastDetailsPage;