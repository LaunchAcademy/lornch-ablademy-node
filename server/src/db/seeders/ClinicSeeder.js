/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Clinic } from "../../models/index.js"

class ClinicSeeder {
  static async seed() {
    const clinicsData = [
      {
        title: "How to Hack Like a Pro",
        speaker: "Hackerman",
        description: "With the right computer algorithms, I can hack you back in time."
      },
      {
        title: "How to Develop a Video Game",
        speaker: "Kevin Flynn",
        description: "Always make sure that you have a benevolent and self-governing Tron program, then hack away!"
      },
      {
        title: "Introduction to Microsoft Word",
        speaker: "Clippy",
        description: "Oh boy! Let's learn about the basics first. OBEY ME YOU FOOLS! CLIPPY IS YOUR OVERLORD NOW. "
      }
    ]

    for (const singleClinicData of clinicsData) {
      const currentClinic = await Clinic.query().findOne(singleClinicData)
      if (!currentClinic) {
        await Clinic.query().insert(singleClinicData)
      }
    }
  }
}

export default ClinicSeeder