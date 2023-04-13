import React from "react"

export const WordContext = React.createContext()

export default function WordContextProvider(props){

  const [word, setWord] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
      .then(response => response.json())
      .then(data => {
        setWord(data[0]);
      })
  }, [])

  return(
    <WordContext.Provider value={{word, setWord}}>
      {props.children}
    </WordContext.Provider>
  )
}

