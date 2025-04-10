export default function Movie({ movie, addToWatchList }) {
  const imgSrc = movie.Poster === "N/A" ? "images/no-image.jpg" : movie.Poster;
  const rating = movie.Rating === "N/A" ? "Not available" : movie.imdbRating;
  const runtime =
    movie.Runtime === "N/A" ? "runtime not available" : movie.Runtime;
  const actors = movie.Actors === "N/A" ? "not available" : movie.Actors;
  const director = movie.Director === "N/A" ? "not available" : movie.Director;

  const plot =
    movie.Plot === "N/A" ? "Description is not available" : movie.Plot;
  const btnClass = movie.addedWatchList
    ? "movie__btn movie__btn_added"
    : "movie__btn";

  return (
    <li className="movie" data-movie={movie.imdbID}>
      <img src={imgSrc} alt={movie.Title} className="movie__poster" />
      <div className="movie__header">
        <h2 className="movie__title">{movie.Title}</h2>
        <p className="movie__year">
          <span className="movie__info">Year:&nbsp;</span>
          {movie.Year}
        </p>
        <p className="movie__country">
          <span className="movie__info">Country:&nbsp;</span>
          {movie.Country}
        </p>
        <p className="movie__runtime">
          <span className="movie__info">Runtime:&nbsp;</span>
          {runtime}
        </p>
        <p className="movie__genre">
          <span className="movie__info">Genre:&nbsp;</span>
          {movie.Genre}
        </p>
        <p className="movie__director">
          <span className="movie__info">Director:</span> {director}
        </p>
        <div className="movie__actor">
          <span className="movie__info">Actors:</span> {actors}
        </div>
        <p className="movie__rate">
          <svg
            className="movie__rate-icon"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L19 11H29L21 18L24 29L15 22L6 29L9 18L1 11H11L15 1Z"
              fill="#e878f9"
              stroke="#e878f9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="movie__rating">{rating}</span>
        </p>
      </div>
      <div className="movie__data">
        <div className="movie__description">
          <span className="movie__info">Description: </span>
          {plot}
        </div>
        <button
          className={btnClass}
          data-movie={movie.imdbID}
          onClick={(e) => addToWatchList(e)}
        >
          Watchlist
        </button>
      </div>
    </li>
  );
}
