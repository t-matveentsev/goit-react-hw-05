import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSearch, initialQuery }) => {
  const [value, setValue] = useState(initialQuery);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search movies"
        />
        {/* <button className={s.formBtn}>Search</button> */}
      </form>
    </div>
  );
};

export default SearchBar;
