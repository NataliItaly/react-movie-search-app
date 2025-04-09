import React from "react";
import Movie from "./Movie";
import { nanoid } from "nanoid";

export default function WatchList({ watchList, addToWatchList }) {
  const watchListMovies =
    watchList.length > 0
      ? watchList.map((movie) => (
          <Movie key={nanoid()} movie={movie} addToWatchList={addToWatchList} />
        ))
      : null;

  return (
    <section>
      <h1 className="watchlist__title">My Watch List</h1>
      {watchListMovies ? (
        <ul className="movies__container">{watchListMovies}</ul>
      ) : (
        <>
          <h2 className="watchlist__empty">Your Watch List Is Empty...</h2>
        </>
      )}
    </section>
  );
}
