import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { WordContext } from "../contexts/WordContext";
import playBtnLight from "./../assets/light/play-btn-light.svg"
import playBtnDark from "./../assets/dark/play-btn-dark.svg"

export default function WordDetailsHeader(){
  const {isLight} = useContext(ThemeContext);
  const {word} = useContext(WordContext);
  
  function playAudio(){
    try{
      const audio = new Audio(word.phonetics[1].audio);
      audio.play();
    }catch(err){
      console.log("Audio not available");
    }
  }
  return(
    word && (
      <div className="word-details-header">

        <div className="word-details-header-left">
          <h1 className="word-heading">
            {word.word}
          </h1>
          <p className="word-phonetic">
            {((word.phonetics)[1]).text}
          </p>
        </div>

        <button className="voice-play-btn" onClick={playAudio}>
          <img src={isLight ? playBtnLight : playBtnDark} alt="image of a play button" />
        </button>

      </div>
    )
  )
}