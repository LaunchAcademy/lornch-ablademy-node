class ClinicSerializer {
    static getClinicDetails(clinic) {
        const allowedAttributes = ["id", "speaker", "title", "description"]

        const serializedClinic = {}

        for (const attribute of allowedAttributes) {
            // console.log(attribute)
            
            serializedClinic[attribute] = clinic[attribute]
            
            // console.log(serializedClinic)
        }

        // console.log(serializedClinic)
        return serializedClinic
    }
}

export default ClinicSerializer