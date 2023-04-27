import express from "express"
import clientRouter from "./clientRouter.js"
import clinicsRouter from "./api/v1/clinicsRouter.js"

const rootRouter = new express.Router()
// `/api/v1/clinics/${clinicId}/questions`
rootRouter.use("/api/v1/clinics", clinicsRouter)
rootRouter.use("/", clientRouter)

export default rootRouter
