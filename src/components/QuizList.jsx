import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navar';
// import 

function QuizList() {
  const quizzes = [
    { id: 'BIO1234', title: 'Biology - BIO1234' },
    { id: 'CHM1334', title: 'Chemistry - CHM1334' },
    { id: 'BIO1123', title: 'Biology - BIO1123' },
    { id: 'CHM1234', title: 'Chemistry - CHM1234' },
    { id: 'BIO1223', title: 'Biology - BIO1223' },
    { id: 'CHM1244', title: 'Chemistry - CHM1244' },
    // Add more quizzes as needed
  ];

  return (
    <div className="container mx-auto p-4 flex items-center justify-center flex-col">
      <div className="bg-slate-400 my-12 flex items-center justify-center rounded-full h-[190px] w-[190px] text-center">
        <Link to="/" className="font-bold text-lg" id='some'>BUK MOBILE APP</Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Available Quizzes</h1>
      <ul className='flex items-center justify-center flex-wrap w-[100vw]'>
        {quizzes.map(quiz => (
          <li key={quiz.id} className="mb-2 mx-3 p-3 flex items-center rounded-lg justify-center flex-row h-[75px] w-[130px] bg-red-400">
            <Link to={`/quiz/${quiz.id}`} className="text-white font-semibold font-sans rounded-full hover:underline">
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
