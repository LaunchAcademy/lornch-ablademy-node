import React from "react"

const QuestionTile = ({ asker, body }) => {
  return(
    <div className="callout">
      <h5> {asker} asks: </h5>
      <p> {body} </p>
    </div>
  )
}

export default QuestionTile
