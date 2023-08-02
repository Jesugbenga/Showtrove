import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "./PageScreen.css";
import Nav from "../Nav";

function PageScreen() {
  const location = useLocation(); // Use useLocation hook

  // Access the movie information from location.state
  const movie = location.state && location.state.movie;

  return (
    <div className="pageScreen" style={movie && { "--background-image": `url(${movie.backdrop_path})` }}>
      <Nav />
      {movie && (
        <div>
          <img src={movie.poster_path} alt={movie.name} />
          <h2>{movie.name}</h2>
        </div>
      )}
    </div>
  );
}

export default PageScreen;
