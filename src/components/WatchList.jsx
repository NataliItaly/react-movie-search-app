import React from "react";
import Movie from "./Movie";
import { nanoid } from "nanoid";

export default function WatchList({ watchList, addToWatchList }) {
  const storageWatchList = JSON.parse(localStorage.getItem("watchList")) || [];

  const watchListMovies =
    storageWatchList.length > 0
      ? watchList.map((movie) => (
          <Movie key={nanoid()} movie={movie} addToWatchList={addToWatchList} />
        ))
      : null;

  return (
    <section>
      {watchListMovies ? (
        <>
          <h1 className="watchlist__title">My Watch List</h1>
          <ul className="movies__container">{watchListMovies}</ul>
        </>
      ) : (
        <>
          <div className="watchlist__empty">
            <h2 className="watchlist__empty-title">
              Your Watch List Is Empty...
            </h2>
          </div>
        </>
      )}
    </section>
  );
}
