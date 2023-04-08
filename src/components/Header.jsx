import React from "react"
import { ThemeContext } from "./../contexts/ThemeContext"

import arrowLight from "./../assets/light/arrow-light.svg"
import bookLight from "./../assets/light/book-light.svg"
import moonLight from "./../assets/light/moon-light.svg"
import newPageLight from "./../assets/light/new-page-light.svg"
import playBtnLight from "./../assets/light/play-btn-light.svg"
import searchBtnLight from "./../assets/light/search-btn-light.svg"

import arrowDark from "./../assets/dark/arrow-dark.svg"
import bookDark from "./../assets/dark/book-dark.svg"
import moonDark from "./../assets/dark/moon-dark.svg"
import newPageDark from "./../assets/dark/new-page-dark.svg"
import playBtnDark from "./../assets/dark/play-btn-dark.svg"
import searchBtnDark from "./../assets/dark/search-btn-dark.svg"

function Header(){

  const { isLight, setIsLight } = React.useContext(ThemeContext);
  const bookIcon = isLight ? bookLight : bookDark;
  const arrowIcon = isLight ? arrowLight : arrowDark;
  const moonIcon = isLight ? moonLight : moonDark;
  
  return(
    <header className="header">
      <div className="header-icon">
        <img src={bookIcon} alt="" />
      </div>

      <div className="font-selector">
        <p className="font-selector-text">
          Serif
        </p>
        <div className="font-selector-icon">
          <img src={arrowIcon} alt="" />
        </div>
      </div>

      <div className="toggle-theme">
        <div
          className="toggle-theme-btn"
          onClick = {() => {
            setIsLight(prevIsLight => !prevIsLight)
          }}
        >
          <div
            className={
              isLight ? "toggle-theme-circle" : "toggle-theme-circle toggled"
            }
            id="toggle-theme-circle"
          >
          </div>
        </div>
        <div className="toggle-theme-icon">
        <img src={moonIcon} alt="" />
        </div>
      </div>


    </header>
  )
}

export default Header