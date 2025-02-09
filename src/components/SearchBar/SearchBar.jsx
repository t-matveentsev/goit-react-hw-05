import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
