import React from "react";
import SearchIcon from "./../assets/light/search-btn-light.svg";
import { WordContext } from "../contexts/WordContext";
import { LoadingContext } from "../contexts/LoadingContext";
import getWord from "../api/getWord";

export default function SearchBar(){
  const [input, setInput] = React.useState("hello");
  const { setWord } = React.useContext(WordContext);
  const {isLoading, setIsLoading, error, setError} = React.useContext(LoadingContext);

  async function handleClick(){
    setError(false);
    setIsLoading(true);
    try{
      const word = await getWord(input);
      setWord(word);
      setIsLoading(false);
    }catch(err){
      setError(err);
    }
  }

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
          if(e.key === "Enter"){
            e.preventDefault();
            handleClick();
          }

        }}
      />
      <button
        className="search-btn"
        id="search-btn"
        onClick = {handleClick}
      >
        <img src={SearchIcon} alt="A search icon (magnifying glass)" />
      </button>
    </div>
  )
}