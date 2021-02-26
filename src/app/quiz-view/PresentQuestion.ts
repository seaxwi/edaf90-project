
export class PresentQuestion{

    public answers : string[];

    constructor(
        public question : string,
        correctAnswer : string,
        incorrectAnswers : string[],
        public id : number
    ){
        this.answers = [...incorrectAnswers, correctAnswer];
        this.shuffle(this.answers);
    }

    private shuffle(string[] list) {
        for (var i = 0; i < list.length; i++) {
            var j = Math.floor(Math.random() * list.length);
            
            var temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
    }
}
