// import React from "react";
// import './inputdata.css';
// import { IoMdCloseCircle } from "react-icons/io";

// const InputData = ({ InputDiv, setInputDiv }) => {
//   const handleClose = () => {
//     setInputDiv("hidden");
//   };

//   return (
//     <>
//       <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>    <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full `}>
//         <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-gray-900 p-4 rounded">
//           <div className="text-xl flex justify-between items-end mb-4">
//             <button onClick={handleClose} className="text-gray-300 hover:text-gray-100">
//               <IoMdCloseCircle />
//             </button>
//           </div>
//           <input
//             type="text"
//             placeholder="Title"
//             name="title"
//             className="px-3 py-2 rounded w-full mb-4 bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//           />
//           <textarea
//             name="desc"
//             cols="30"
//             rows="10"
//             placeholder="Description"
//             className="px-3 py-2 rounded w-full bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
//           />
//           <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold hover:text-white transition ease-in-out duration-300">
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InputData;

import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const InputData = ({ InputDiv, setInputDiv }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    setInputDiv("hidden");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData={
      title:newTask,
      desc:description,
      user:JSON.parse(localStorage.getItem('user')).id
    }
    console.log(formData)
    let token=localStorage.getItem("token")
    if (newTask.trim() && description.trim()) {
        await  fetch('http://localhost:3001/api/v2/create-task',{
          method:"POST",
          headers: {
            'authorization': `Bearer ${token}`,            'Content-Type': 'application/json',
            // Forward the token in the proper format
        },
          body:JSON.stringify(formData)
        })
      const task = { title: newTask, description };
      setTasks([...tasks, task]);
      setNewTask('');
      setDescription('');
      // navigate('/all-tasks', { state: { tasks: [...tasks, task] } });
    }
  };

  return (
    <>
      <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
      <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-gray-900 p-4 rounded">
          <div className="text-xl flex justify-between items-end mb-4">
            <button onClick={handleClose} className="text-gray-300 hover:text-gray-100">
              <IoMdCloseCircle />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full p-2 mb-4 rounded"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 mb-4 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputData; 