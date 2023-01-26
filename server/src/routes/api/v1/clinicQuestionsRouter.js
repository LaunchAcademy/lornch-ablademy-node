import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Clinic, Question } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"


const clinicQuestionsRouter = new express.Router({ mergeParams: true })

clinicQuestionsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)

  // your code here
})

export default clinicQuestionsRouter