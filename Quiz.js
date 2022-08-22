class Quiz {

  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
  }

  getQuestionIndex() {

    return this.questions[this.questionsIndex];
  }

  isEnded() {
    return this.questions.length === this.questionsIndex;
    
  }

  guess(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)){
      this.score++;
    }
    this.questionsIndex++;
  }
}
