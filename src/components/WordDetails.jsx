import React from "react";
import { nanoid } from "nanoid";

import { WordContext } from "../contexts/WordContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { LoadingContext } from "../contexts/LoadingContext";

import WordDetailsHeader from "./WordDetailsHeader";
import WordMeaning from "./WordMeaning"
import Loading from "./Loading"
import Error from "./Error"

export default function WordDetails(){
  const {word} = React.useContext(WordContext);
  const {isLight} = React.useContext(ThemeContext);
  const {isLoading, error} = React.useContext(LoadingContext);

  if(error){
    return <Error />
  }

  if(!word || isLoading){
    return <Loading />
  }

  const wordMeaningEls = word.meanings.map(meaning => (
    <WordMeaning key={nanoid()} meaning={meaning}/>
  ))

  return(
    <div className="word-details">
      <WordDetailsHeader />
      { wordMeaningEls }
    </div>
  )
}