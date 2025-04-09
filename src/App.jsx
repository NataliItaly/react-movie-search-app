import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [searchMovie, setSearchMovie] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const apiKey = "e2485c75";

  console.log(moviesList);
  useEffect(() => {
    if (searchMovie) {
      let moviesData = [];
      fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Search);
          data.Search.forEach((movie) => {
            const requestMovieStr = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`;
            fetch(requestMovieStr)
              .then((response) => response.json())
              .then((data) => {
                moviesData.push(data);
              });
          });
          setMoviesList(moviesData);
        });
    }
  }, [searchMovie]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(formData) {
    //e.preventDefault();
    //const formData = new FormData(e.currentTarget);
    const searchStr = formData.get("search-input").toLowerCase().trim();
    setSearchMovie(searchStr);
  }

  return (
    <>
      <Header />
      <Main
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        moviesList={moviesList}
      />
      <Footer />
    </>
  );
}

export default App;
