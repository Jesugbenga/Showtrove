import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(  /*Checks for a movie from the resulting set and outputs it */
                request.data.results[
                    Math.floor(Math.random() *  request.data.results.length - 1)
                ]
            )
            return request;
        }

        fetchData();
    }, [])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...': string; /*? for incase the string isn't there */
    }

  return (
    <header
    className="banner" 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",  /*Keeps it central */
    }}>
        
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button"> + Add to Watchlist </button>
                <button className="banner__button"> More information </button>
            </div>
            <h1 className="banner__description">
                {truncate(movie?.overview, 200)}
            </h1>
        </div>

        <div className="banner__fadeBottom"/> 
    </header>
  );
}

export default Banner;
