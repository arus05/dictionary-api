import React from "react"

export default function Error(){
  return(
    <div className="error">
      <p className="error-title">No Definitions Found</p>
      <p className="error-message">
        Sorry pal, we couldn't find definitions for the word you were looking for.
        You can try the search again at later time or head to the web instead.
      </p>
    </div>
  )
}