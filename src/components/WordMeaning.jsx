import React from "react";
import { nanoid } from "nanoid";

export default function WordMeaning({meaning}){

  const definitionEls = meaning.definitions.map(definition => {
    return (
    <li key={nanoid()} className="definition">
      <p className="definition-content">{definition.definition}</p>
      {definition.example &&
      <p className="definition-example">{definition.example}</p>}
    </li>
    )
  })


  const synonymEls = meaning.synonyms.map(synonym => (
    <li className="synonym" key={nanoid()}>{synonym}</li>
  ))

  const antonymEls = meaning.antonyms.map(antonym => (
    <li className="antonym" key={nanoid()}>{antonym}</li>
  ))

  return(
    <section className="word-meaning">
      <div className="meaning-seperator ">
        <h2 className="part-of-speech">
        { meaning.partOfSpeech}
        </h2>
        <div className="seperator-line"></div>
      </div>

      {definitionEls.length > 0 &&
      <div className="definitions">
        <h3 className="definition-title">Meaning</h3>
        <ul className="definition-list">
          { definitionEls }
        </ul>
      </div>}
      
      {synonymEls.length > 0 &&
      <div className="synonyms">
        <h3 className="synonyms-title">
          Synonyms
        </h3>
        <ul className="synonym-list">
          { synonymEls }
        </ul>
      </div>}

      {antonymEls.length > 0 &&
        <div className="antonyms">
        <h3 className="antonyms-title">
          Antonyms
        </h3>
        <ul className="antonym-list">
          {antonymEls}
        </ul>
      </div>}

    </section>
  )
}