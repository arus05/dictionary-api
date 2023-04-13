import React from "react"
import SearchIcon from "./../assets/light/search-btn-light.svg"
import { WordContext } from "../contexts/WordContext";
import getWord from "../api/getWord"

export default function SearchBar(){

  const [input, setInput] = React.useState("hello");
  const { setWord } = React.useContext(WordContext);

  return(
    <div className="search">
      <input
        type="text" 
        required
        placeholder="Word to search"
        className="search-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.keyCode === 13){
            e.preventDefault();
            getWord(input)
              .then(word => setWord(word))
              .catch(err => console.log(err))
          }

        }}
      />
      <button
        className="search-btn"
        onClick = {() => {
          getWord(input)
              .then(word => setWord(word))
              .catch(err => console.log(err))
        }}
      >
        <img src={SearchIcon} alt="A search icon (magnifying glass)" />
      </button>
    </div>
  )
}