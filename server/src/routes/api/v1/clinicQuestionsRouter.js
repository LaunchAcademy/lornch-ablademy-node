import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Clinic, Question } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"


const clinicQuestionsRouter = new express.Router({ mergeParams: true })

clinicQuestionsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  console.log(formInput)
  console.log(req.params.clinicId)

  // your code here
  try {
    const newQuestion = await Question.query().insertAndFetch({
      asker: formInput.asker,
      body: formInput.body,
      clinicId: req.params.clinicId
    })

    // const clinic = await Clinic.query().findById(req.params.clinicId)
    // const newQuestion = await clinic.$relatedQuery("questions").insertAndFetch(formInput)

    return res.status(201).json({ question: newQuestion })
  } catch(err) {
    console.log(err)
    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err })
  }
})

export default clinicQuestionsRouter