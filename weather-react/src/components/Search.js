import React, { useState, useEffect } from "react";
import "../styles/search.scss";

const Search = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Search text: ${input}`);
    setInput("");
  };

  return (
    <div className="search">
      <form>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default Search;
