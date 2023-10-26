const Model = require("./Model")

class Question extends Model {
  static get tableName() {
    return "questions"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["asker", "body"],
      properties: {
        asker: { type: "string" },
        body: { type: "string", minLength: 5, maxLength: 255 },
        clinicId: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { Clinic } = require("./index.js")
    return {
      clinic: {
        relation: Model.BelongsToOneRelation,
        modelClass: Clinic,
        relation: {
          join: {
            from: "questions.clinicId",
            to: "clinic.id"
          }
        }
      }
    }
  }
}

module.exports = Question
