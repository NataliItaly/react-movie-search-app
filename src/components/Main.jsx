import React from "react";
import Form from "./Form";
import Movie from "./Movie";

export default function Main({
  input,
  handleChange,
  handleSubmit,
  moviesList,
}) {
  const movies =
    moviesList.length > 0 && moviesList.map((movie) => <Movie movie={movie} />);

  return (
    <main className="main">
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ul className="movies">{movies}</ul>
    </main>
  );
}
