import express from "express"

import { Clinic } from "../../../models/index.js"
import clinicQuestionsRouter from "./clinicQuestionsRouter.js"

import ClinicSerializer from "../../../serializers/ClinicSerializer.js"

const clinicsRouter = new express.Router()

clinicsRouter.get("/", async (req, res) => {
  try {
    const clinics = await Clinic.query()
    return res.status(200).json({ clinics: clinics })
  } catch(error){
    return res.status(500).json({ errors: error })
  }
})

clinicsRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  // const { id } = req.params
  try {
    const clinic = await Clinic.query().findById(id)
    const serializedClinicObject = ClinicSerializer.getClinicDetails(clinic)
    // console.log(serializedClinicObject)
    // your code here for associated Questions
    // clinic.questions = []
    // serializedClinicObject.questions = []
    const relatedQuestions = await clinic.$relatedQuery("questions")
    // console.log(relatedQuestions);
    
    serializedClinicObject.questions = relatedQuestions
    
    return res.status(200).json({ clinic: serializedClinicObject })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err })
  }
})

// `/api/v1/clinics/${clinicId}/questions`
clinicsRouter.use("/:clinicId/questions", clinicQuestionsRouter)

export default clinicsRouter