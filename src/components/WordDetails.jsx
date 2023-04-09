import React from "react";
import { nanoid } from "nanoid";

import { WordContext } from "../contexts/WordContext";
import { ThemeContext } from "../contexts/ThemeContext";

import WordDetailsHeader from "./WordDetailsHeader";
import WordMeaning from "./WordMeaning"

export default function WordDetails(){
  const {word} = React.useContext(WordContext);
  const {isLight} = React.useContext(ThemeContext);

  if(!word){
    return <h2>Loading...</h2>
  }

  const wordMeaningEls = word.meanings?.map(meaning => (
    <WordMeaning key={nanoid()} meaning={meaning}/>
  )) || null

  return(
    <div className="word-details">
      <WordDetailsHeader />
      { wordMeaningEls }
    </div>
  )
}