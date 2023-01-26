class QuestionSerializer {
    static getDetails(question) {
        const allowedAttributes = ["id", "asker", "body"]

        let serializedQuestion = {}

        for (const attribute of allowedAttributes) {
            serializedQuestion[attribute] = question[attribute]
        }

        return serializedQuestion
    }
}

export default QuestionSerializer