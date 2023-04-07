import React from "react"
import SearchIcon from "./../assets/light/search-btn-light.svg"

export default function SearchBar(){
  return(
    <div className="search">
      <input type="text" required placeholder="Word to search" className="search-input"/>
      <button className="search-btn">
        <img src={SearchIcon} alt="A search icon (magnifying glass)" />
      </button>
    </div>
  )
}