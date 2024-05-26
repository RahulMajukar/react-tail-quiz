import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver } = useContext(DataContext);
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-full lg:w-6/12">
                        <div className={`text-white text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-green-500' : 'bg-red-500'}`}>
                            <h1 className='mb-2 font-bold'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 font-bold'>Your score is {marks} out of {quizs.length * 5}</h3>

                            <button onClick={startOver} className='btn py-2 px-4 bg-gray-300 text-gray-800 font-bold inline-block'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
