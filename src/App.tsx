import React from "react";
import QuestionCard from "./components/QuestionCard";

function App() {
  const start = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={start}>
        Start
      </button>
      <p className="score">Score</p>
      <p> Loading Questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
