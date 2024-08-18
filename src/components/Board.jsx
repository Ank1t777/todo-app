import React from 'react';

const Board = ({ task, id, taskList, setTaskList }) => {
    const handleDelete = () => {
        const [...newTasks] = taskList; 
        newTasks.splice(id, 1) ;
        setTaskList(newTasks);
    };

    return (
        <div className='max-w-md rounded-xl flex flex-col text-center text-lg items-center justify-start border py-4 pb-4 px-4'>
            <p>{task}</p>
            <button
                className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4'
                onClick={handleDelete} // Pass the function reference
            >
                Delete
            </button>
        </div>
    );
};

export default Board;
