import { useState } from "react";

const Searchbar = ({ handleQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleQuery(value);
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Поиск изображений..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
    </header>
  );
};

export default Searchbar;
