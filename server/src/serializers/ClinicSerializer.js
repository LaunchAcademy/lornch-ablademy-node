class ClinicSerializer {
    static async getDetails(clinic){
        const allowedAttributes = ["id", "speaker" , "title", "description"]

        let serializedClinic = {}

        for(const attribute of allowedAttributes){
            serializedClinic[attribute] = clinic[attribute]
        }

        const relatedQuestions = await clinic.$relatedQuery("questions")

        // const serializedQuestions = relatedQuestions.map(question => {
        //     return QuestionSerializer.getSummary(question)
        // })

        serializedClinic.questions = relatedQuestions

        return serializedClinic
    }
}

export default ClinicSerializer