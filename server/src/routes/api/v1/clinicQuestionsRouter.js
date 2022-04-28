import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Question } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const clinicQuestionsRouter = new express.Router({ mergeParams: true })

clinicQuestionsRouter.post("/", async (req, res) => {
  try {
    const { body } = req
    console.log("body", body)
    const formInput = cleanUserInput(body)
    console.log("form input", formInput)

    // your code here
    const clinicId = req.params.clinicId
    console.log(clinicId)

    const newQuestion = await Question.query().insertAndFetch({
      asker: formInput.asker,
      body: formInput.body,
      clinicId: clinicId,
    })

    res.status(201).json({ question: newQuestion })
  } catch (error) {
    // handle for validation errors
    console.log(error)
    res.status(500).json(error)
  }
})

export default clinicQuestionsRouter
