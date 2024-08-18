import { useEffect, useState } from 'react';
import Input from './components/Input';
import Board from './components/Board';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  //  // Load tasks from localStorage when component mounts
  //  useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem('taskList') || [])
  //   setTaskList(savedTasks);
  //  }, []);

  //   // Save tasks to localStorage whenever taskList changes

  //   useEffect(() => {
  //     localStorage.setItem('taskList', JSON.stringify(taskList));
  //   },[taskList]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

useEffect(() => {
  if(darkMode)
  {
    document.body.classList.add('bg-gray-900', 'text-white');
  }
  else{
    document.body.classList.remove('bg-gray-900', 'text-white');
  }
},[darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Toggle switch for dark mode */}
      <div className='absolute top-4 right-4 mr-8'>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2 font semi-bold">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
      
      <div className='flex flex-col items-center justify-center py-8'>
        <h1 className='text-xl font-semibold'>Todo List</h1>

        {/* passed props to Input component */}
        <Input taskList={taskList} setTaskList={setTaskList} darkMode={darkMode} />
        <div className='grid grid-cols-3 gap-20 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
          {taskList.map((task, id) => 
            <Board 
              key={id} 
              task={task} 
              id={id}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
