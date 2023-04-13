async function getWord(word){
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  if (!response.ok){
    throw {
      textMessage: "could not find the word",
      status: 404
    }
  }
  const data = await response.json()
  return data[0]
}

export default getWord;