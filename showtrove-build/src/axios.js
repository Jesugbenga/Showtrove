import axios from "axios";  /*API allows you to make a request from Showtrove to TMDB using the secret key*/

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;