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
  console.log(searchMovie);
  console.log(moviesList);
  useEffect(() => {
    if (searchMovie) {
      fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Search);
          setMoviesList(data.Search);
        });
    }
  }, [searchMovie]);

  function handleChange(e) {
    setInput(e.target.value);
  }
  console.log(input);

  function handleSubmit(formData) {
    //e.preventDefault();
    //const formData = new FormData(e.currentTarget);
    console.log(formData);
    const searchStr = formData.get("search-input").toLowerCase().trim();
    setSearchMovie(searchStr);
    console.log("search", searchStr);
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
