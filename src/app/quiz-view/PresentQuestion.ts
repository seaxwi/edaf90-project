
export class PresentQuestion{

    public answers : string[];
    public submittedAnswer : "";

    constructor(
        public question : string,
        public correctAnswer : string,
        incorrectAnswers : string[],
        public id : number,
    ){
        this.answers = this.shuffleAnswer(correctAnswer, incorrectAnswers);
    }

    private shuffleAnswer(correctAnswer : string, incorrectAnswers : string[]) : string[] {
        let result = [correctAnswer, ...incorrectAnswers];
        let index = Math.floor(Math.random() * result.length);

        let temp = result[0];
        result[0] = result[index];
        result[index] = temp;
        return result;
    }
}
