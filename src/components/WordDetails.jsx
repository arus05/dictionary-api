import React from "react";

import { WordContext } from "../contexts/WordContext";
import { ThemeContext } from "../contexts/ThemeContext";

import WordDetailsHeader from "./WordDetailsHeader";

export default function WordDetails(){
  const {word} = React.useContext(WordContext);
  const {isLight} = React.useContext(ThemeContext);

  return(
    <div className="word-details">
      {
        word?
        <WordDetailsHeader /> :
        <h2> Loading... </h2>
      }
    </div>
  )
}