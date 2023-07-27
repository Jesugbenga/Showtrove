import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import { useNavigate } from "react-router-dom";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);  /*creates an empty array*/

    const base_url = "https://image.tmdb.org/t/p/original/";

    const navigate = useNavigate(); // Use the useNavigate hook

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results); /*update the data*/
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
          
            <div className="row__posters">
                {movies.map(
                    (movie) => 
                        ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                onClick={() => navigate("/page")}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}  /*image className*/
                                key={movie.id}
                                src={`${base_url}${
                                    isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`} 
                                alt={movie.name}
                            />
                        )
                )}
            </div>
        </div>
  );
}

export default Row;
