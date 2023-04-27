import React, { useState } from "react"

const NewQuestionForm = ({ postQuestion }) => {
  const [newQuestion, setNewQuestion] = useState({
    asker: "",
    body: "",
  })

  const handleInputChange = event => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postQuestion(newQuestion)
    clearForm()
  }

  const clearForm = () => {
    setNewQuestion({
      asker: "",
      body: ""
    })
  }

  return (
    <div className="callout">
      <h4>There Are No Stupid Questions</h4>
      <form onSubmit={handleSubmit} >
        <label>
          Asker:
          <input
            type="text"
            name="asker"
            onChange={handleInputChange}
            value={newQuestion.asker}
          />
        </label>

        <label>
          Body:
          <input
            type="text"
            name="body"
            onChange={handleInputChange}
            value={newQuestion.body}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Ask Away" />
          <button type="button" onClick={clearForm} className="button">Clear</button>
        </div>
      </form>
    </div>
  )
}

export default NewQuestionForm
