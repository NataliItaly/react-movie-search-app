import React from "react";

export default function Filter({ onFilterChange, filter }) {
  /*const [filter, setFilter] = useState(null);
  console.log(filter);
  function onFilterChange(e) {
    console.log(e.target.value);
    setFilter(e.target.value);

    if (filter === "year-earliest") {
      const filteredMoviesList = moviesList.sort((a, b) => a.Year - b.Year);
      setMoviesList(filteredMoviesList);
    }
  }*/

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
          <option className="filter__oprtion" desabled="true" value="">
            Year
          </option>
          <option className="filter__oprtion" value="year-earliest">
            From earliest year
          </option>
          <option className="filter__oprtion" value="year-latest">
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
          <option className="filter__oprtion" desabled="true" value="">
            Rating
          </option>
          <option className="filter__oprtion" value="rate-highest">
            From highest rate
          </option>
          <option className="filter__oprtion" value="rate-lowest">
            From lowest rate
          </option>
        </select>
      </form>
    </section>
  );
}
