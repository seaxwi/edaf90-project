
export class PresentQuestion{

    public answers : string[];
    public submittedAnswer : "";

    constructor(
        public question : string,
        public correctAnswer : string,
        incorrectAnswers : string[],
        public id : number,
    ){
        this.answers = [...incorrectAnswers, correctAnswer];
        this.shuffle(this.answers);
    }

    private shuffle(list : string[]) {
        for (var i = list.length-1; i > 0; i--) {
            var j = Math.floor(Math.random() * i+1);
            
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
    }
}
