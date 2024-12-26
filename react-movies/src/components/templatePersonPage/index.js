import PersonHeader from "../headerPerson";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const TemplatePersonPage = ({ person, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles;

  return (
    <>
      <PersonHeader person={person} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{xs: 3}}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList
                sx={{
                    height: "100vh",
                }}
                cols={1}
            >
                {images.map((i) => (
                <img
                  key={i.file_path}
                  src={`https://image.tmdb.org/t/p/w154${i.file_path}`}
                  className="profile"
                  alt={i.file_path}
                />
          ))} 
            </ImageList>
          </div>
        </Grid>

        <Grid size={{xs: 9}}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;