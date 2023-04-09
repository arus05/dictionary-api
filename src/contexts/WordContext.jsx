import React from "react"

export const WordContext = React.createContext()

export default function WordContextProvider(props){

  const [word, setWord] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then(response => response.json())
      .then(data => {
        setWord(data[0]);
        console.log(data[0]);
      })
  }, [])

  return(
    <WordContext.Provider value={{word}}>
      {props.children}
    </WordContext.Provider>
  )
}

