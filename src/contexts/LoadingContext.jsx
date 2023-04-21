import React from "react"

export const LoadingContext = React.createContext()

export default function LoadingContextProvider(props){

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null)

  return(
    <LoadingContext.Provider value={{isLoading, setIsLoading, error, setError}}>
      { props.children }
    </LoadingContext.Provider>
  )
}