import {
    MOVIE_API_KEY,
    MOVIE_IMG_URL,
    MOVIE_URL,
    ENDPOINT
} from "../constants/api";
const axios = require("axios").default;

// request API
const MOVIE_REQUEST = axios.create({
    baseURL:MOVIE_URL,
    params:{
        api_key:MOVIE_API_KEY,
        language:"en-US"
    },
});

// get api from url
const getNowPlaying = () => MOVIE_REQUEST.get(ENDPOINT.NOW_MOVIE);
const getUpComingPlaying = () => MOVIE_REQUEST.get(ENDPOINT.UP_MOVIE);
// get image
const getPoster = (path) => `${MOVIE_IMG_URL}/w185${path}`;


export {
    getNowPlaying,
    getPoster,
    getUpComingPlaying
}