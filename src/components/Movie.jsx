export default function Movie({ movie }) {
  const imgSrc = movie.Poster === "N/A" ? "images/no-image.jpg" : movie.Poster;
  const rating = movie.Rating === "N/A" ? "Not available" : movie.imdbRating;
  const runtime =
    movie.Runtime === "N/A" ? "runtime not available" : movie.Runtime;
  const actors = movie.Actors === "N/A" ? "not available" : movie.Actors;
  const plot =
    movie.Plot === "N/A" ? "Description is not available" : movie.Plot;
  //const btnClass = addClass ? "movie__btn movie__btn_added" : "movie__btn";
  //localStorage.clear();
  return (
    <li class="movie" data-movie={movie.imdbID}>
      <img src={imgSrc} alt={movie.Title} class="movie__poster" />
      <div class="movie__data">
        <div class="movie__header">
          <h2 class="movie__title">{movie.Title}</h2>
          <p class="movie__rate">
            <img src="images/star.svg" alt="" />
            <span class="movie__rating">{rating}</span>
          </p>
        </div>
        <div class="movie__header">
          <p class="movie__year">{movie.Year}</p>
          <p>{movie.Country}</p>
        </div>
        <div class="movie__info">
          <span class="movie__runtime">{runtime}</span>
          <span class="movie__genre">{movie.Genre}</span>
          <button class="movie__btn">Watchlist</button>
        </div>
        <div class="movie__actors">Actors: {actors}</div>
        <div class="movie__description">{plot}</div>
      </div>
    </li>
  );
}
