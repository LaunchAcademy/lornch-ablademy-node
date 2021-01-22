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

  static get relationMappings(){
    return {
      
    }
  }
}

module.exports = Signup