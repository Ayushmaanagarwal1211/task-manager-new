import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { IoAddCircle } from "react-icons/io5";
import InputData from "../components/Inputdata";
import Sidebar from "../components/Sidebar";

const Alltasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");
    let [tasks,setTasks]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData(){
        let project=JSON.parse(localStorage.getItem('project'))[0]._id
let formData={
    project:project
}
      let data= await fetch("http://localhost:3001/api/v2/get-all-tasks",{
        method:"POST",headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
        })
        data=await data.json()
       
          setTasks([...data.data])
    }
    return (
        <>
            <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
            {/* Sidebar */}
            <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
                {/* <Outlet /> */}
                <h1>All Tasks</h1>
                {
                    tasks.map((data)=>{
                        return <div>title:{data.title} <p>desc : {data.desc} </p><p>IsComplete:{data.complete?"Completed":"Incomplete"}</p></div>
                    })
                }
            </div>
        </div>
        </>
    );
}

export default Alltasks;


// import React, { useState } from "react";
// import Cards from "../components/Cards";
// import { IoAddCircle } from "react-icons/io5";
// import InputData from "../components/Inputdata";

// const Alltasks = () => {
//     const [InputDiv, setInputDiv] = useState("hidden");
//     const [tasks, setTasks] = useState([]);

//     return (
//         <>
//             <div className="p-4">
//                 <div className="flex justify-end mb-4">
//                     <button
//                         onClick={() => setInputDiv("fixed")}
//                         className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-400 transition-all duration-300"
//                     >
//                         <IoAddCircle />
//                     </button>
//                 </div>
//                 <Cards home={"true"} setInputDiv={setInputDiv} />
//                 <div className="mt-4">
//                     <h2 className="text-white text-lg mb-2">All Tasks</h2>
//                     <ul>
//                         {tasks.map((task, index) => (
//                             <li key={index} className="text-gray-300 mb-1">
//                                 <strong>{task.title}</strong>: {task.description}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} setTasks={setTasks} tasks={tasks} />
//         </>
//     );
// }

// export default Alltasks;