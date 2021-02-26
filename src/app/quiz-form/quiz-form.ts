export class QuizForm {

  constructor(
    public nbrQuestions : number,
    public category : string,
    public difficulty : string,
    public type : string,
    public url? : string
  ) {  }

}
