import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import { useNavigate} from "react-router-dom";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to hold the selected movie

  const base_url = "https://image.tmdb.org/t/p/original/";
  
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie in state
    navigate(`/page/${movie.id}`);
  };

  return (
    <div className="row">
      <h2 className="title">{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                //onClick={() =>  handleMovieClick(movie)} // Pass the clicked movie to the handler
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
