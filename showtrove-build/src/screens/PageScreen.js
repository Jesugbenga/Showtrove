import React, { useEffect, useState } from "react";
import "./PageScreen.css";
import axios from "../axios";
import Nav from "../Nav.js";
import { useParams } from "react-router-dom";


function PageScreen() {
  const { movieId } = useParams(); // Get the movieId parameter from the URL

  const [movie, setMovie] = useState([]);

  const API_KEY = "a86144f6893336dbde9ec817fb31e3c2";

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
        setMovie(request.data.results);
        return request;  
      }

    fetchData();
  }, [movieId]);

  return (
    <header
    className="pageScreen" 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",  /*Keeps it central */
    }}>
        <Nav />
        
        <div className="pageScreen__contents">
            <h1 className="pageScreen__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="pageScreen__buttons">
                
            </div>
            <h1 className="pageScreen__description">
                {movie?.overview}
            </h1>
        </div>
        
    </header>
  );
}

export default PageScreen;
