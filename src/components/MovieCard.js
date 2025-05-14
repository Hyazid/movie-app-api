import React from 'react'

function MovieCard({movie}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
        {movie.poster_path ? (
  <img
    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
    alt={movie.title}
    style={{ width: "100%" }}
  />
) : (
  <div style={{ height: "300px", background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <span>No Image</span>
  </div>
)}
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
    </div>
  )
}

export default MovieCard