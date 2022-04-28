class ClinicSerializer {
  static getSummary(clinics) {
    // serialize all clinics
    // omitting timestamps

    const allowedAttributes = ["id", "title", "speaker", "description"]
    const serializedClinics = clinics.map((clinic) => {
      console.log("clinic", clinic)

      const serializedClinicObj = {}
      for (const attribute of allowedAttributes) {
        console.log("attribute", attribute)
        serializedClinicObj[attribute] = clinic[attribute]
      }
      console.log("serialized clinic", serializedClinicObj)
      return serializedClinicObj
    })

    return serializedClinics
  }

  static async getDetails(clinic) {
    // serialize the one clinic
    // omitting timestamps
    // query for related questions

    const allowedAttributes = ["id", "title", "speaker", "description"]

    const serializedClinicObj = {}
    for (const attribute of allowedAttributes) {
      // console.log("attribute", attribute);
      serializedClinicObj[attribute] = clinic[attribute]
    }

    serializedClinicObj.questions = await clinic.$relatedQuery("questions")

    return serializedClinicObj
  }
}

export default ClinicSerializer
