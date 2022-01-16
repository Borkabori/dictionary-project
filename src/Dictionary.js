import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [wordResults, setWordResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setWordResults(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function handlePexelsResponse(response) {
    // console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    // where it came from: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f917000010000010f09483a61744624b3879362169fa2a4";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
