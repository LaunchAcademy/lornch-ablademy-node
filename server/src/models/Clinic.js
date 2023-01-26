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

  static get relationMappings(){
    const { Question } = require("./index.js")

    return {
      questions: {
        modelClass: Question,
        relation: Model.HasManyRelation,
        join: {
          from: "clinics.id",
          to: "questions.clinicId"
        }
      }
    }
  }
}

module.exports = Clinic
