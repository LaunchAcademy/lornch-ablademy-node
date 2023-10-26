const Model = require("./Model")

class Clinic extends Model {
  static get tableName() {
    return "clinics"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "speaker"],
      properties: {
        title: { type: "string" },
        speaker: { type: "string" },
        description: { type: "string", minLength: 5, maxLength: 200 },
      }
    }
  }

  static get relationMappings() {
    const { Question, Student } = require("./index.js")

    return {
      questions: {
        relation: Model.HasManyRelation,
        modelClass: Question,
        join: {
          from: "clinics.id",
          to: "questions.clinicId"
        }
      },
      students: {
        relation: Model.ManyToManyRelation,
        modelClass: Student,
        join: {
          from: "clinics.id",
          through: {
            from: "signups.clinicId",
            to: "signups.studentId"
          },
          to: "students.id"
        }
      }
    }
  }
}

module.exports = Clinic
