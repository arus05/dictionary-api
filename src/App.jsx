import React, { useState } from 'react'
import Header from "./components/Header"
import SearchBar from './components/SearchBar'
import WordDetails from './components/WordDetails'
import WordContextProvider from './contexts/WordContext'
import LoadingContextProvider from './contexts/LoadingContext'

function App() {

  return (
    <div className="App">
      <Header /> 
      <WordContextProvider>
        <LoadingContextProvider>
          <SearchBar />
          <WordDetails />
        </LoadingContextProvider>
      </WordContextProvider>
    </div>
  )
}

export default App
