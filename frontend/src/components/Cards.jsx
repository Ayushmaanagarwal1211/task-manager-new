
import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import InputData from './Inputdata';

const Cards = ({ InputDiv, setInputDiv}) => {
     let user=localStorage.getItem('user')
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
         console.log(data.data,'asasas')
        data=data.data.filter((d)=>d.user==JSON.parse(user).id)
           setTasks([...data])
           console.log('sdsdsdsdsdsssssss',data)
     }
   
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
         <h1>Your Tasks</h1>
            {
                tasks.map((data)=>{
                    return <div>title:{data.title}</div>
                })
            }
            { localStorage.getItem('role')=='manager' && (
                <button
                    className='flex flex-col justify-center items-center bg-gray-800 p-4 rounded-lg hover:scale-105 cursor-pointer transition-all duration-300'
                    onClick={() => setInputDiv("fixed")}
                >
                    <IoAddCircle className='text-5xl' />
                </button>
            )}
            <InputData InputDiv={InputDiv} setInputDiv={setInputDiv}/>
        </div>
    );
}

export default Cards;
