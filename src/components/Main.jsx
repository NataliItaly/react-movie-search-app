import React from "react";
import Form from "./Form";
import Movie from "./Movie";
import { nanoid } from "nanoid";
import WatchList from "./WatchList";

export default function Main({
  input,
  handleChange,
  handleSubmit,
  moviesList,
  watchList,
  addToWatchList,
}) {
  const movies =
    moviesList.length > 0 &&
    moviesList.map((movie) => (
      <Movie key={nanoid()} movie={movie} addToWatchList={addToWatchList} />
    ));

  return (
    <main className="main">
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ul className="movies__container">{movies}</ul>
      <WatchList watchList={watchList} addToWatchList={addToWatchList} />
    </main>
  );
}
