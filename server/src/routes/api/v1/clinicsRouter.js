import express from "express"

import { Clinic } from "../../../models/index.js"
import clinicQuestionsRouter from "./clinicQuestionsRouter.js"

const clinicsRouter = new express.Router()

clinicsRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const clinic = await Clinic.query().findById(id)
    return res.status(200).json({ clinic })
  }
  catch(err) {
    return res.status(500).json({ errors: err })
  }
})

clinicsRouter.use("/:clinicId/questions", clinicQuestionsRouter)

export default clinicsRouter