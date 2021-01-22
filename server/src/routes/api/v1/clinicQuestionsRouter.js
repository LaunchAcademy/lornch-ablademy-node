import express from "express"
import { ValidationError } from "objection"

import { Question } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const clinicQuestionsRouter = new express.Router({ mergeParams: true })

clinicQuestionsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const clinicId = req.params.clinicId 
  // const { asker, body } = formInput

  const asker = formInput.asker
  const questionBody = formInput.body

  try {
    const question = await Question.query().insertAndFetch({ asker: asker, body: questionBody, clinicId: clinicId })
    return res.status(201).json({ question: question })
  } catch(error){
    // check for validation error
    
    console.log(error)
    res.status(500).json({errors: error})
  }
})


export default clinicQuestionsRouter