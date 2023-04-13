import React, { useState } from 'react'
import Header from "./components/Header"
import SearchBar from './components/SearchBar'
import WordDetails from './components/WordDetails'
import WordContextProvider from './contexts/WordContext'

function App() {

  return (
    <div className="App">
      <Header /> 
      <WordContextProvider>
        <SearchBar />
        <WordDetails />
      </WordContextProvider>
    </div>
  )
}

export default App
