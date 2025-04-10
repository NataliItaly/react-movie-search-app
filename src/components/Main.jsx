import React from "react";
import Form from "./Form";
import Movie from "./Movie";
import { nanoid } from "nanoid";
import WatchList from "./WatchList";
import Filter from "./Filter";

export default function Main({
  input,
  handleChange,
  handleSubmit,
  moviesList,
  watchList,
  addToWatchList,
  error,
  isHome,
  onFilterChange,
  filter,
}) {
  const movies =
    moviesList.length > 0 &&
    moviesList.map((movie) => (
      <Movie key={nanoid()} movie={movie} addToWatchList={addToWatchList} />
    ));

  return (
    <main className="main">
      {isHome ? (
        <section>
          <Form
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isHome={isHome}
          />
          {error ? (
            <div className="error">
              <p>There is no movie found. Please try something else...</p>
            </div>
          ) : (
            <>
              {moviesList.length > 0 && (
                <Filter onFilterChange={onFilterChange} filter={filter} />
              )}
              <ul className="movies__container">{movies}</ul>
            </>
          )}
        </section>
      ) : (
        <WatchList watchList={watchList} addToWatchList={addToWatchList} />
      )}
    </main>
  );
}
