/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Clinic, Question } from "../../models/index.js"

class QuestionSeeder {
  static async seed() {
    const firstClinic = await Clinic.query().findOne({ title: "How to Hack Like a Pro" })
    const secondClinic = await Clinic.query().findOne({ title: "How to Develop a Video Game" })

    const questionsData = [
      {
        asker: "Sombra",
        body: "Can I also hack other people with this technology?",
        clinicId: firstClinic.id
      },
      {
        asker: "Lucio",
        body: "How can we use these new found insights to rebel against our corporate overlords?",
        clinicId: firstClinic.id
      },
      {
        asker: "Echo",
        body: "How does one run an executable?",
        clinicId: secondClinic.id
      }
    ]

    for (const singleQuestionData of questionsData) {
      const currentQuestion = await Question.query().findOne(singleQuestionData)
      if (!currentQuestion) {
        await Question.query().insert(singleQuestionData)
      }
    }

    const numQuestions = await Question.query().count()
    console.log(numQuestions);
    console.log(`${numQuestions[0].count} Questions added to the database`);
  }
}

export default QuestionSeeder