import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Question } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const clinicQuestionsRouter = new express.Router({ mergeParams: true })

clinicQuestionsRouter.post("/", async (req, res) => {
  try {
    const { body } = req
  
    // const body = req.body
    // console.log(body);
    // const questionAsker = body.asker
    // const questionBody = body.body
  
    // const formInput = cleanUserInput(body)
  
    const clinicId = req.params.clinicId
    
    const question = await Question.query().insertAndFetch({ asker: questionAsker, body: questionBody, clinicId: clinicId })
    // const question = await Question.query().insertAndFetch({ ...body, clinicId })
    console.log(question);
    return res.status(201).json({ question })
    // return res.status(201).json({ question: question })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error })
  }
})

export default clinicQuestionsRouter