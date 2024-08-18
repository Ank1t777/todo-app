import { useState } from 'react'

const Input = ({taskList, setTaskList, darkMode }) => {
    const [input, setInput] = useState("");
    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input])
        setInput("");
    }
    // console.log(input);
    return (
        <>
            <form className='flex flex-row items-center gap-4 py-6'>
                <input

                    type="text"
                    className={`border rounded-lg px-2.5 py-1.5 text-lg 
                    ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-black'}`}
                    placeholder="Add task"
                    id="input--box"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                    className='text-white bg-orange-400 rounded-lg p-2
                    hover:opacity-70 font-semibold'    
                    onClick={handleAddTask}>Add</button>
            </form>
        </>
    )
}

export default Input
