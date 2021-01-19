const Model = require("./Model")

class Signup extends Model {
  static get tableName(){
    return "signups"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["asker"],
      properties: {}
    }
  }
}

module.exports = Signup