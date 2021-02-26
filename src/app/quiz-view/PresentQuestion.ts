
export class PresentQuestion{

    public answers : String [];

    constructor(
        public question : String,
        correctAnswer : String,
        incorrectAnswers : String [],
        public id : Number
    ){
        //TODO: Algorithm för att slumpa var vi lägger det rätta svaret
        this.answers = [...incorrectAnswers, correctAnswer].sort(() => Math.random() - 0.5)
    }


}