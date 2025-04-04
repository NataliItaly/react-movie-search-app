import React from "react";

export default function Form() {
  return (
    <form className="form">
      <label htmlFor="#search-input" className="form__label">
        Search Movie
      </label>
      <input
        type="search"
        className="form__input"
        placeholder="What would you like to watch?"
      />
    </form>
  );
}
