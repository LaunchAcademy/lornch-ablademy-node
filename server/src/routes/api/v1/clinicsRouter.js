import express from "express"

import { Clinic } from "../../../models/index.js"
import clinicQuestionsRouter from "./clinicQuestionsRouter.js"
import ClinicSerializer from "../../../serializers/ClinicSerializer.js"

// import ClinicSerializer from "../../../serializers/ClinicSerializer.js"

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
  try {
    const regularOriginalClinic = await Clinic.query().findById(id)
    console.log(regularOriginalClinic)

    const serializedClinic = ClinicSerializer.getDetailsForOneClinic(regularOriginalClinic)
    console.log(serializedClinic)

    // your code here for associated Questions
    const arrayOfClinicQuestions = await regularOriginalClinic.$relatedQuery("questions")
    console.log(arrayOfClinicQuestions)
    serializedClinic.questions = arrayOfClinicQuestions

    const arrayOfStudents = await regularOriginalClinic.$relatedQuery("students")
    console.log(arrayOfStudents)
    serializedClinic.students = arrayOfStudents

    return res.status(200).json({ clinic: serializedClinic })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err })
  }
})

// rootRouter
// api/v1/clinics > clinicsRouter
clinicsRouter.use("/:clinicId/questions", clinicQuestionsRouter)

export default clinicsRouter