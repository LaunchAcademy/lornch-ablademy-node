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

  static get relationMappings(){
    const Clinic = require("./Clinic")
    return {
      clinics: {
        relation: Model.ManyToManyRelation,
        modelClass: Clinic,
        join: {
          from: "students.id",
          through: {
            from: "signups.studentId",
            to: "signups.clinicId",
          },
          to: "clinics.id"
        }
      }
    }
  }
}

module.exports = Student
