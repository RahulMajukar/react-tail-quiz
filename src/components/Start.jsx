import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-full lg:w-8/12">
                        <h1 className='font-bold mb-4'>Basic React JS Quiz</h1>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-gray-300 text-gray-800 font-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
