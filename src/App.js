import React, { useEffect } from "react";
import "./styles.css";
import Movie from "./movieCard";
import { fetchPopular } from "./services/fetchMovies";

export default function App() {
  const [movie, setMovie] = React.useState([
    {
      id: 0,
      title: "Dil Bechara",
      rating: "rating: 8.6",
      cast: "cast : Sushant Singh Rajput, Sanjana Sanghi",
      discription:
        "‘Dil Bechara’ will always be remembered as Sushant Singh Rajput’s swan song. Watch this movie simply to witness Sushant Singh Rajput’s last act.",
      isliked: "🤍",
      likeicon: "🤍",
      watchlisted: "Add to Watchlist"
    },
    {
      id: 1,
      title: "Kuch Bheege Alfaaz",
      rating: "rating: 8.7",
      cast: "cast : Sushant Singh Rajput, Sanjana Sanghi",
      discription:
        "‘Dil Bechara’ will always be remembered as Sushant Singh Rajput’s swan song. Watch this movie simply to witness Sushant Singh Rajput’s last act.",
      isliked: "🤍",
      likeicon: "🤍",
      watchlisted: "Add to Watchlist"
    },
    {
      id: 2,
      title: "The fault in our stars ",
      rating: "rating: 8.3",
      cast: "cast : Sushant Singh Rajput, Sanjana Sanghi",
      discription:
        "‘Dil Bechara’ will always be remembered as Sushant Singh Rajput’s swan song. Watch this movie simply to witness Sushant Singh Rajput’s last act.",
      isliked: "🤍",
      likeicon: "🤍",
      watchlisted: "Add to Watchlist"
    }
  ]);

  useEffect(async () => {
    let movies = await fetchPopular();
    console.log("movies", movies.data);
    setMovie(movies.data.results);
  }, []);

  const handleLike = (id) => {
    const moviesCopy = movie.map((movie) => {
      const movieCopy = { ...movie };
      if (movieCopy.id === id) {
        if (movieCopy.isliked === "🤍") {
          movieCopy.isliked = "❤️";
        } else movieCopy.isliked = "🤍";
      }
      return movieCopy;
    });
    setMovie(moviesCopy);
  };

  const handleWatchlist = (id) => {
    const moviesCopy = movie.map((movie) => {
      const movieCopy = { ...movie };
      if (movieCopy.id === id) {
        if (movieCopy.watchlisted === "Add to Watchlist") {
          movieCopy.watchlisted = "Remove from Watchlist";
        } else movieCopy.watchlisted = "Add to Watchlist";
      }
      return movieCopy;
    });
    setMovie(moviesCopy);
  };

  const handleDelete = (id) => {
    const filteredMovies = movie.filter((movie) => movie.id !== id);
    setMovie(filteredMovies);
  };

  return (
    <div>
      <div className="App">
        <h1>Movies</h1>
      </div>
      <div className="movies">
        {movie.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            cast={movie.release_date}
            isliked={movie.isliked}
            likeicon={movie.likeicon}
            watchlisted={movie.watchlisted}
            discription={movie.overview}
            handleLike={handleLike}
            handleWatch={handleWatchlist}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
