
import React, { useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const Cards = ({ home, setInputDiv}) => {
       
    const data = [
        {
            title: 'All tasks',
            description: 'View all tasks',
            status: 'in complete',
        },
        {
            title: 'Important tasks',
            description: 'View all important tasks',
            status: 'complete',
        },
        {
            title: 'Completed tasks',
            description: 'View all completed tasks',
            status: 'in complete',
        },
        {
            title: 'Incompleted tasks',
            description: 'View all incompleted tasks',
            status: 'in complete',
        },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {data.map((item, index) => (
                <div key={index} className='flex flex-col justify-between bg-gray-800 p-4 rounded-lg'>
                    <div>
                        <h2 className='text-xl font-bold text-gray-100'>{item.title}</h2>
                        <p className='text-gray-300'>{item.description}</p>
                    </div>
                    <div className='mt-4 w-full flex flex-col sm:flex-row items-center'>
                        <button
                            className={` ${item.status === "in complete" ? "bg-red-400" : "bg-green-700"} p-2 rounded w-full sm:w-3/6 mb-2 sm:mb-0`}
                        >
                            {item.status}
                        </button>
                        <div className='text-white text-xl flex items-center justify-around w-full sm:w-3/6'>
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && localStorage.getItem("user")&& JSON.parse(localStorage.getItem("user")).role=="manager" && (
                <button
                    className='flex flex-col justify-center items-center bg-gray-800 p-4 rounded-lg hover:scale-105 cursor-pointer transition-all duration-300'
                    onClick={() => setInputDiv("fixed")}
                >
                    <IoAddCircle className='text-5xl' />
                    <h2 className='text-2xl text-gray-300'>Add task</h2>
                </button>
            )}
        </div>
    );
}

export default Cards;
