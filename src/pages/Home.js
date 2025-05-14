import { useState, useEffect } from "react"
import React from 'react'
import { fetchPopularMovies,searchForMovies } from "../api/Movie"
import MovieCard from "../components/MovieCard"
import { data } from "react-router-dom";
function Home() {
    const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState('');
    useEffect(()=>{
        fetchPopularMovies().then((data)=>{
            console.log('fetched movie', data)
            setMovies(data.results)
        })
    },[])

    const handleSearch= async (e)=>{
        e.preventDefault();
        const results= await searchForMovies(query)
        console.log("Searching for:", query);

        setMovies(results)
    }   
  return (
    <div style={{padding:'2rem'}}>
        <form onSubmit={handleSearch} style={{marginBottom:'2rem'}}>
            <input type="text"
            value={query}
            placeholder="search for movie ..."
            onChange={(e)=>setQuery(e.target.value)}
            style={{padding : "0.5rem", fontSize: "1rem", width: "250px"}}
            />
            <button type="submit" style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}>
                search
            </button>
        </form>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {Array.isArray(movies) && movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}

        </div>


    </div>
  )
}

export default Home