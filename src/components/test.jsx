import { useState, useEffect } from "react";

function Filter({ onFilterChange, filter }) {
  return (
    <section className="filter">
      <h2 className="visually-hidden">Filter movies</h2>
      <form className="filter__form">
        <h3>Filter by</h3>
        <label htmlFor="" className="filter__label visually-hidden">
          Year
        </label>
        <select
          name="filter-year"
          value={filter}
          id="filter-year"
          className="filter__select"
          onChange={(e) => onFilterChange(e)}
        >
          <option className="filter__option" desabled="true" value="">
            Year
          </option>
          <option className="filter__option" value="year-earliest">
            From earliest year
          </option>
          <option className="filter__option" value="year-latest">
            From latest year
          </option>
        </select>
        <label htmlFor="" className="filter__label visually-hidden">
          Rating
        </label>
        <select
          name="filter-rate"
          value={filter}
          id="filter-rate"
          className="filter__select"
          onChange={(e) => onFilterChange(e)}
        >
          <option className="filter__option" desabled="true" value="">
            Rating
          </option>
          <option className="filter__option" value="rate-highest">
            From highest rate
          </option>
          <option className="filter__option" value="rate-lowest">
            From lowest rate
          </option>
        </select>
      </form>
    </section>
  );
}

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    if (filter) {
      if (filter === "year-earliest") {
        const filteredMoviesList = moviesList.sort(
          (a, b) => parseFloat(a.Year) - parseFloat(b.Year)
        );
        setMoviesList(filteredMoviesList);
      } else if (filter === "year-latest") {
        const filteredMoviesList = moviesList.sort(
          (a, b) => parseFloat(b.Year) - parseFloat(a.Year)
        );
        setMoviesList(filteredMoviesList);
      }

      if (filter === "rate-highest") {
        const filteredMoviesList = moviesList.sort(
          (a, b) => parseFloat(a.imdbID) - parseFloat(b.imdbID)
        );
        console.log("filteredList ", filteredMoviesList);
        setMoviesList(filteredMoviesList);
      } else if (filter === "rate-lowest") {
        const filteredMoviesList = moviesList.sort(
          (a, b) => parseFloat(b.imdbID) - parseFloat(a.imdbID)
        );
        setMoviesList(filteredMoviesList);
      }
    }
  }, [filter]);

  function onFilterChange(e) {
    console.log("change");
    console.log(e.target.value);
    setFilter(e.target.value);
  }

  return (
    <>
      <Filter onFilterChange={onFilterChange} filter={filter} />
    </>
  );
}

export default App;
