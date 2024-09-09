import React, { useState } from "react";
import Cards from "../components/Cards";
import { IoAddCircle } from "react-icons/io5";
import InputData from "../components/Inputdata";

const Alltasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");

    return (
        <>
            <div className="p-4">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setInputDiv("fixed")}
                        className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-400 transition-all duration-300"
                    >
                        <IoAddCircle />
                    </button>
                </div>
                <Cards home={"true"} setInputDiv={setInputDiv} />
            </div>
            <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
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