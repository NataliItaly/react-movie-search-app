import React from "react";

export default function Form({ input, handleChange, handleSubmit }) {
  return (
    <form className="form" action={handleSubmit}>
      <label htmlFor="#search-input" className="form__label">
        <span className="form__label-text">Search Movie</span>
        <input
          type="search"
          className="form__input"
          placeholder="What would you like to watch?"
          name="search-input"
          value={input}
          onChange={(e) => handleChange(e)}
          autoFocus
        />
      </label>
    </form>
  );
}
