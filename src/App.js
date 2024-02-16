import logo from './logo.svg';
import './App.css';
import "./ComponentNameStyles.css";
import React, { useState } from 'react';
import Question from './Model/Question';
import ComponentName from './ComponentName';

function App() {
  const [questions, setQuestions] = useState([
     new Question ("what is the biggest animal in the world?",
     "easy",
      ["Elephant", "Giraffe", "Hippopotamus"],
      "Blue Whale") ,
     new Question( "How many times has Andy Murray won Wimbledon playing singles?",
     "medium",
      ["Once",  "Three times", "Four times"],
      "Twice"),
     new Question( "Which country is brie cheese originally from?",
      "hard",
        ["Italy",  "Spain", "Germany"],
        "France")
     
      

  ]);
function onAttempt(attempt){
  if (questions[0].checkAnswer(attempt)){
    alert("Correct!")
  }
  else{
    alert("Wrong!")
  }
}
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trivial Quiz &#x1F50D;</h1>
        <h1>{questions[0].question}</h1>
        <div className="btn-container">
          {questions[0].shuffleOptions().map((option) => {
            return (
             <ComponentName label={option} onAttempt={() => onAttempt(option)}/>
            
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
//  <Question question={Question} /> 