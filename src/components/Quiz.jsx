import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
        selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

    return (
        <section className="bg-dark text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-full lg:w-8/12">
                        <div className="card p-4 bg-gray-800 border-gray-600">
                            <div className="flex justify-between gap-3">
                                <h5 className='mb-2 text-base'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => <button
                                        key={index}
                                        className={`option w-full text-left btn text-white py-2 px-3 mt-3 rounded bg-gray-700 ${correctAnswer === item && 'bg-green-500'}`}
                                        onClick={(event) => checkAnswer(event, item)}
                                    >
                                        {item}
                                    </button>)
                                }
                            </div>

                            {
                                (questionIndex + 1) !== quizs.length ?
                                    <button className='btn py-2 w-full mt-3 bg-blue-500 text-white font-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                                    :
                                    <button className='btn py-2 w-full mt-3 bg-blue-500 text-white font-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
