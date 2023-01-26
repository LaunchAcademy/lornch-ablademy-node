import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Clinic, Question } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

import QuestionSerializer from "../../../serializers/QuestionSerializer.js"

const clinicQuestionsRouter = new express.Router({ mergeParams: true })

clinicQuestionsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)

  // formInput.clinicId = req.params.clinicId
  const clinic = await Clinic.query().findById(req.params.clinicId)

  const question = await clinic.$relatedQuery("questions").insertAndFetch(formInput)

  const serializedQuestion = QuestionSerializer.getDetails(question)

  return res.status(201).json({ question: serializedQuestion })
  // your code here
})

export default clinicQuestionsRouter