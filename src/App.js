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

  const [currentQuestion, setCurrentQuestion] = useState(0);

function onAttempt(attempt){
  if (questions[currentQuestion].checkAnswer(attempt)){
    alert("Correct!")
    setCurrentQuestion((currentQuestion + 1) % questions.length);
  }
  else{
    alert("Wrong!")
  }
}
 
  return (
    <div className="App">
      <header className="App-header">
      <><img src={logo} className="App-logo" alt="logo" /><a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
      Learn React
    </a></>

        <h1>Trivial Quiz &#x1F50D;</h1>
        <h1>{questions[currentQuestion].question}</h1>
        <div className="btn-container">
          {questions[currentQuestion].shuffleOptions().map((option) => {
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
