const Model = require("./Model")

class Clinic extends Model {
  static get tableName() {
    return "clinics"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],
      properties: {
        title: { type: "string" },
        description: { type: "string", minLength: 5, maxLength: 100 },
      }
    }
  }
}

module.exports = Clinic
