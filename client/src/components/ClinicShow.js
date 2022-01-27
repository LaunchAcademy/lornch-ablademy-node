import React, { useState, useEffect } from "react"

import NewQuestionForm from "./NewQuestionForm"
import QuestionTile from "./QuestionTile"
import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const ClinicShow = props => {
  const [clinic, setClinic] = useState({
    title: "",
    speaker: "",
    description: "",
    questions: []
  })
  const [errors, setErrors] = useState([])

  const clinicId = props.match.params.id

  const getClinic = async () => {
    try {
      const response = await fetch(`/api/v1/clinics/${clinicId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      // debugger
      setClinic(body.clinic)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getClinic()
  }, [])

  const postQuestion = async (newQuestionData) => {
    try {
      const response = await fetch(`/api/v1/clinics/${clinicId}/questions`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newQuestionData)
      })
      if (!response.ok) {
          if(response.status === 422) {
            const body = await response.json()
            const newErrors = translateServerErrors(body.errors)
            return setErrors(newErrors)
          } else {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw(error)
          }
        } else {
          const body = await response.json()
          const updatedQuestions = clinic.questions.concat(body.question)
          setClinic({...clinic, questions: updatedQuestions})
        }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  let questionTiles
  if (clinic.questions) {
    questionTiles = clinic.questions.map(questionObject => {
      return(
        <QuestionTile
          key={questionObject.id}
          {...questionObject}
        />
      )
    })
  }

  return(
    <div>
      <div className="callout">
        <h1>{clinic.title}</h1>
        <h5>Presented by: {clinic.speaker}</h5>
        <p>{clinic.description}</p>
      </div>

      <div>
        <ErrorList errors={errors} />
        <NewQuestionForm
          postQuestion={postQuestion}
        />
      </div>
      <h4>Clinic Questions:</h4>
      {questionTiles}
    </div>
  )
}

export default ClinicShow
