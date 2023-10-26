class ClinicSerializer {
    static getDetailsForOneClinic(clinic) {
        const allowedAttributes = ["id", "title", "speaker", "description"]
        const serializedClinicObject = {}

        for (const attribute of allowedAttributes) {
            serializedClinicObject[attribute] = clinic[attribute]
        }

        return serializedClinicObject
    }
}

export default ClinicSerializer