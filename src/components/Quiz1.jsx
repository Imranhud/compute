import React from 'react';
import { useParams } from 'react-router-dom';

function Quiz1() {
  const { id } = useParams();
  const questions = [
    { question: 'Who want be developer?', options: ['ImranHud', 'GwaniMuktr', 'IbrahimYahuza', 'IsmailRabiu'], correct: 'Paris' },
    { question: 'What is 2 + 22?', options: ['3', '4', '5', '6'], correct: '4' },
    // Add more questions as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz1 {id}</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
            <ul>
              {q.options.map((option, i) => (
                <li key={i} className="mb-1">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz1;
