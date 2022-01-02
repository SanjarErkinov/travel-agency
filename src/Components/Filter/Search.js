import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchFunction = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={searchFunction}>
        <input
          type="text"
          placeholder="Seacrh"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
