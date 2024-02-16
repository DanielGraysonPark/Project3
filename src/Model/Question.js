
 
export default class Question{
    constructor(question, difficulty, incorrectAnswers, correctAnswer){
        this.question = question;
        this.difficulty = difficulty;
        this.incorrectAnswers = incorrectAnswers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return this.correctAnswer === answer;
    }

   shuffleOptions(){
    let newOptions = [...this.incorrectAnswers ];
    newOptions.push(this.correctAnswer);
    newOptions.sort(() => Math.random() - 0.5);
    return newOptions;
    }
    
   
};



  
// shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }

