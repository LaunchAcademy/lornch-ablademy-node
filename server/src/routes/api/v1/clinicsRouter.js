import express from "express"

import { Clinic } from "../../../models/index.js"
import ClinicSerializer from "../../../serializers/ClinicSerializer.js"
import clinicQuestionsRouter from "./clinicQuestionsRouter.js"

const clinicsRouter = new express.Router()

clinicsRouter.get("/", async (req, res) => {
  try {
    const clinics = await Clinic.query()
    const serializedClinics = ClinicSerializer.getSummary(clinics)
    return res.status(200).json({ clinics: serializedClinics })
  } catch(error){
    return res.status(500).json({ errors: error })
  }
})

clinicsRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const clinic = await Clinic.query().findById(id)
    // console.log(clinic)

    const serializedClinic = await ClinicSerializer.getDetails(clinic)

    //step 1
    // const clinicQuestions = await clinic.$relatedQuery("questions")
    // // console.log(clinicQuestions);
    // clinic.questions = clinicQuestions


    // // step 2, refactor
    // serializedClinic.questions = await clinic.$relatedQuery("questions")

    // console.log(clinic);

    return res.status(200).json({ clinic: serializedClinic })
  } catch(err) {
    return res.status(500).json({ errors: err })
  }
})

clinicsRouter.use("/:clinicId/questions", clinicQuestionsRouter)

export default clinicsRouter