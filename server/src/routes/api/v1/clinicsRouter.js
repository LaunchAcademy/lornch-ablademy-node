import express from "express"

import { Clinic } from "../../../models/index.js"
import clinicQuestionsRouter from "./clinicQuestionsRouter.js"

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
    const clinic = await Clinic.query().findById(id)

    // your code here for associated Questions
    clinic.questions = []

    return res.status(200).json({ clinic: clinic })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err })
  }
})


// clinicsRouter.use("/:clinicId/questions", clinicQuestionsRouter)

export default clinicsRouter