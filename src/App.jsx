import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [searchMovie, setSearchMovie] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const apiKey = "e2485c75";

  console.log(moviesList);
  console.log(watchList);

  useEffect(() => {
    if (searchMovie) {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`
          );
          const data = await response.json();

          if (data.Search) {
            const moviePromises = data.Search.map(async (movie) => {
              const movieResponse = await fetch(
                `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
              );
              return await movieResponse.json();
            });

            const moviesData = await Promise.all(moviePromises);
            setMoviesList(
              moviesData.map((movie) => ({ ...movie, addedWatchList: false }))
            );
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchMovies();
    }
  }, [searchMovie]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(formData) {
    const searchStr = formData.get("search-input").toLowerCase().trim();
    setSearchMovie(searchStr);
  }

  function addToWatchList(e) {
    console.log(e.target.dataset.movie);
    const [addedMovie] = moviesList.filter(
      (movie) => movie.imdbID === e.target.dataset.movie
    );
    console.log(addedMovie.addedWatchList);
    console.log(addedMovie);

    const modifiedMoviesList = moviesList.map((movie) =>
      movie.imdbID === e.target.dataset.movie
        ? { ...movie, addedWatchList: !movie.addedWatchList }
        : movie
    );
    setMoviesList(modifiedMoviesList);
    const modifiedWatchList = watchList.filter((movie) => movie.addedWatchList);
    setWatchList(modifiedWatchList);
  }

  return (
    <>
      <Header />
      <Main
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        moviesList={moviesList}
        watchList={watchList}
        addToWatchList={addToWatchList}
      />
      <Footer />
    </>
  );
}

export default App;
