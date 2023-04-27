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
  console.log(formInput)
  
  const clinicIdFromParams = req.params.clinicId

  const formDataWithClinicId = {
    ...formInput,
    clinicId: clinicIdFromParams
  }

  console.log(formDataWithClinicId);
  try {
    // option 1
    const newQuestion = await Question.query().insertAndFetch(formDataWithClinicId)

    // option 2
    // const clinic = await Clinic.query().findById(clinicIdFromParams)
    // const newQuestion = await clinic.$relatedQuery("questions").insertAndFetch(formInput)
    console.log(newQuestion);

    return res.status(201).json({ question: newQuestion })
  } catch (err) {
    console.error(err);
    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err })
  }
})

export default clinicQuestionsRouter