/* eslint-disable no-console */
import { connection } from "../boot.js"

import ClinicSeeder from "./seeders/ClinicSeeder.js"
import QuestionSeeder from "./seeders/QuestionSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding clinics...")
    await ClinicSeeder.seed()

    console.log("seeding questions...")
    // await QuestionSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder