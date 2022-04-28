import express from "express"

import { Clinic } from "../../../models/index.js"
import ClinicSerializer from "../../../serializers/ClinicSerializer.js"
import clinicQuestionsRouter from "./clinicQuestionsRouter.js"

const clinicsRouter = new express.Router()

clinicsRouter.get("/", async (req, res) => {
  try {
    const clinics = await Clinic.query()
    //serialize
    const serializedClinics = ClinicSerializer.getSummary(clinics)
    console.log(serializedClinics)

    return res.status(200).json({ clinics: serializedClinics })
    // return res.status(200).json({ clinics: clinics })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

clinicsRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const clinic = await Clinic.query().findById(id)
    // console.log(clinic);

    //  your code for adding questions

    // step 1
    // const questions = await clinic.$relatedQuery("questions");
    // // console.log(questions);
    // clinic.questions = questions;

    // step 2 - serializer
    const serializedClinic = await ClinicSerializer.getDetails(clinic)

    return res.status(200).json({ clinic: serializedClinic })
    // return res.status(200).json({ clinic });
    // return res.status(200).json({ clinic: clinic });
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

clinicsRouter.use("/:clinicId/questions", clinicQuestionsRouter)

export default clinicsRouter
