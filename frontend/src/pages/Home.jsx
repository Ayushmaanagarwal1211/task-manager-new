import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './styles.css';

const Home = () => {
   
    return (
        <div className="flex flex-row md:flex-row h-[98vh] gap-4 p-4">
            {/* Sidebar */}
            <div className="w-auto md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-row justify-between">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
