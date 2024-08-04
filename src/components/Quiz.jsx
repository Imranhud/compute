import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Quiz() {
  const { id } = useParams();
  const biologyQuestions = [
    { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'], correct: 'Mitochondria' },
    { question: 'Which process do plants use to make their food?', options: ['Photosynthesis', 'Respiration', 'Digestion', 'Transpiration'], correct: 'Photosynthesis' },
    // Add more biology questions as needed
  ];

  const chemistryQuestions = [
    { question: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'NaCl'], correct: 'H2O' },
    { question: 'What is the atomic number of carbon?', options: ['6', '12', '14', '16'], correct: '6' },
    // Add more chemistry questions as needed
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Timer set to 10 seconds for each question

  useEffect(() => {
    // Set questions based on the quiz ID
    if (id.startsWith('BIO')) {
      setQuestions(biologyQuestions);
    } else if (id.startsWith('CHM')) {
      setQuestions(chemistryQuestions);
    }
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setTimeLeft(10); // Reset timer for next question
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Quiz {id}</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-2">Your score is {score} out of {questions.length}</h2>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz {id}</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{currentQuestion.question}</h2>
          <p className="text-right text-sm">Time left: {timeLeft} seconds</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="mb-1">
                <button
                  onClick={() => handleOptionClick(option)}
                  className={`text-left w-full font-bold py-2 px-4 rounded ${
                    selectedOption === option ? 'bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {selectedOption && (
          <button
            onClick={handleNextQuestion}
            className="bg-blue-400 text-white w-[40vw] mx-auto my-2 h-12"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
