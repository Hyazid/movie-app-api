import axios from "axios";

const API_KEY='095e9b080284b6b87693eb1c82598575'
const BASE_URL="https://api.themoviedb.org/3";

export const fetchPopularMovies =async()=>{
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
    return response.data;
}
export const searchForMovies = async(query)=>{
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
}