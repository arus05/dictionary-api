import React from "react"

export const ThemeContext = React.createContext();

export default function ThemeContextProvider(props){

  const [isLight, setIsLight] = React.useState(true)

  React.useEffect(() => {
    if(isLight){
      document.querySelector(":root").classList.remove("dark");
    }
    else{
      document.querySelector(":root").classList.add("dark")
    }
  }, [isLight])

  return(
    <ThemeContext.Provider value={{isLight, setIsLight}}>
      {props.children}
    </ThemeContext.Provider>
  )
}