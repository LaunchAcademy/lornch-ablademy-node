const Model = require("./Model")

class Student extends Model {
  static get tableName() {
    return "students"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      }
    }
  }
}

module.exports = Student
