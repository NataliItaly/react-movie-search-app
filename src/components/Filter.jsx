import React from "react";

export default function Filter({
  onYearChange,
  onRateChange,
  yearFilter,
  rateFilter,
}) {
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
          value={yearFilter}
          id="filter-year"
          className="filter__select"
          onChange={(e) => onYearChange(e)}
        >
          <option className="filter__option" value="">
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
          value={rateFilter}
          id="filter-rate"
          className="filter__select"
          onChange={(e) => onRateChange(e)}
        >
          <option className="filter__option" value="">
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
