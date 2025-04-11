import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [searchMovie, setSearchMovie] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );
  const [error, setError] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [yearFilter, setYearFilter] = useState(null);
  const [rateFilter, setRateFilter] = useState(null);

  window.localStorage.setItem("watchList", JSON.stringify(watchList));
  const apiKey = "e2485c75";

  console.log(moviesList);
  console.log("filter: ", rateFilter);

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
                `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}&plot=full`
              );
              return await movieResponse.json();
            });

            const moviesData = await Promise.all(moviePromises);
            setMoviesList(
              moviesData.map((movie) => ({ ...movie, addedWatchList: false }))
            );
          } else {
            setMoviesList([]);
            setError(true);
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchMovies();
    }
  }, [searchMovie]);

  useEffect(() => {
    if (yearFilter) {
      let filteredMoviesList = [...moviesList];
      if (yearFilter === "year-earliest") {
        filteredMoviesList.sort(
          (a, b) => parseFloat(a.Year) - parseFloat(b.Year)
        );
        setMoviesList(filteredMoviesList);
      } else if (yearFilter === "year-latest") {
        filteredMoviesList.sort(
          (a, b) => parseFloat(b.Year) - parseFloat(a.Year)
        );
        setMoviesList(filteredMoviesList);
      }
    }
  }, [yearFilter]);

  useEffect(() => {
    if (rateFilter) {
      let filteredMoviesList = [...moviesList];
      if (rateFilter === "rate-highest") {
        filteredMoviesList.sort(
          (a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating)
        );
        console.log("filteredList ", filteredMoviesList);
        setMoviesList(filteredMoviesList);
      } else if (rateFilter === "rate-lowest") {
        filteredMoviesList.sort(
          (a, b) => parseFloat(a.imdbRating) - parseFloat(b.imdbRating)
        );
        setMoviesList(filteredMoviesList);
      }
    }
  }, [rateFilter]);

  function handleIsHome() {
    setIsHome((prev) => !prev);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(formData) {
    const searchStr = formData.get("search-input").toLowerCase().trim();
    setSearchMovie(searchStr);
    setInput("");
  }

  function onYearChange(e) {
    console.log("change year");
    console.log(e.target.value);
    setYearFilter(e.target.value);
  }

  function onRateChange(e) {
    console.log("change rate");
    console.log(e.target.value);
    setRateFilter(e.target.value);
  }

  function addToWatchList(e) {
    const [modifiedMovie] = moviesList.filter(
      (movie) => movie.imdbID === e.target.dataset.movie
    );
    modifiedMovie.addedWatchList = !modifiedMovie.addedWatchList;

    const modifiedMoviesList = moviesList.map((movie) =>
      movie.imdbID === e.target.dataset.movie
        ? { ...movie, addedWatchList: modifiedMovie.addedWatchList }
        : movie
    );
    setMoviesList(modifiedMoviesList);

    if (modifiedMovie.addedWatchList) {
      setWatchList((prev) => [...prev, modifiedMovie]);
    } else {
      const modifiedWatchList = watchList
        .map((movie) =>
          modifiedMovie.imdbID === movie.imdbID
            ? { ...movie, addedWatchList: false }
            : movie
        )
        .filter((movie) => movie.addedWatchList);
      setWatchList(modifiedWatchList);
    }

    localStorage.setItem("watchList", JSON.stringify(watchList));
  }

  return (
    <>
      <Header isHome={isHome} handleIsHome={handleIsHome} />
      <Main
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        moviesList={moviesList}
        watchList={watchList}
        addToWatchList={addToWatchList}
        error={error}
        isHome={isHome}
        onYearChange={onYearChange}
        onRateChange={onRateChange}
        yearFilter={yearFilter}
        rateFilter={rateFilter}
      />
      <Footer />
    </>
  );
}

export default App;
