const Model = require("./Model")

class Signup extends Model {
  static get tableName(){
    return "signups"
  }

  static get jsonSchema() {
    return {
      type: "object",
      // properties: {}
    }
  }
}

module.exports = Signup