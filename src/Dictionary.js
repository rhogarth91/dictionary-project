import React, { useState } from "react";
import Results from "./Results";
import Images from "./Images";

import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setkeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function handleDictionaryResponses(response) {
    setResults(response.data);
  }

  function handleImageApiResponse(response) {
    setImages(response.data);
  }

  function search(event) {
    event.preventDefault();
    const dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=74a685e33bd3f486faa1o3tac33e021d`;
    const imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=74a685e33bd3f486faa1o3tac33e021d`;

    axios
      .all([axios.get(dictionaryApiUrl), axios.get(imageApiUrl)])
      .then(
        axios.spread((dictionaryResponse, imageResponse) => {
          handleDictionaryResponses(dictionaryResponse);
          handleImageApiResponse(imageResponse);
        })
      )
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <>
      <form onSubmit={search} className="Search-form">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a word"
          autoFocus
          onChange={handleKeywordChange}
        />
        <button type="submit" className="Search-button">
          Search
        </button>
      </form>
      <Results results={results} />
      <Images images={images} />
    </>
  );
}
