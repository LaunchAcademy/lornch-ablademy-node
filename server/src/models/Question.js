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
        clinicId: { type: ["integer", "string"] },
      },
    }
  }

  static get relationMappings() {
    const Clinic = require("./Clinic")

    return {
      clinic: {
        relation: Model.BelongsToOneRelation,
        modelClass: Clinic,
        join: {
          from: "questions.clinicId",
          to: "clinics.id",
        },
      },
    }
  }
}

module.exports = Question
