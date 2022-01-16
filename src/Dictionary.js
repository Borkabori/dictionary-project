import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [wordResults, setWordResults] = useState(null);

  function handleResponse(response) {
    setWordResults(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    // where it came from: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="mainsection">
        <h1>Dictionary</h1>
        <div className="Asking">What word do you want to look up?</div>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            // placeholder={"..."}
          />
        </form>
      </div>
      <Results outcome={wordResults} />
    </div>
  );
}
