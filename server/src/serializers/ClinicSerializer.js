class ClinicSerializer {
  
  // serialize array of Clinics
  static getSummary(clinics) {
    const allowedAttributes = ["id", "speaker", "title", "description"];

    const serializedClinics = clinics.map((clinic) => {
      let serializedClinic = {};
      for (const attribute of allowedAttributes) {
        serializedClinic[attribute] = clinic[attribute];
      }
  
      return serializedClinic;
    })

    return serializedClinics
  }

  // serialize one Clinic
  static async getDetails(clinic) {
    const allowedAttributes = ["id", "speaker", "title", "description"];

    let serializedClinic = {}
    for (const attribute of allowedAttributes) {
      // console.log("attribute", attribute);
      serializedClinic[attribute] = clinic[attribute]
      // console.log("clinic", serializedClinic);
    }

    serializedClinic.questions = await clinic.$relatedQuery("questions")

    // console.log(serializedClinic);
    return serializedClinic
  }
}

export default ClinicSerializer;
