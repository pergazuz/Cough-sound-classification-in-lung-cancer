import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeLogo from '../../assets/welcome_logo.png';

const WelcomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <h1 className="mt-4 text-3xl font-bold text-purple-950 text-center">Welcome to</h1>
            <h2 className="text-5xl font-bold text-purple-950 text-center">Lung Self</h2>
            <img src={WelcomeLogo} alt="Welcome to Self Care" className="max-w-80 h-auto mt-4"/>
            <div className="mt-8 w-full max-w-md flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                <Link to="/signup" className="w-full sm:w-1/2">
                    <button className="w-full py-2 px-2 text-white bg-purple-950 border border-purple-950 rounded-lg hover:bg-purple-800">Sign Up</button>
                </Link>
                <Link to="/login" className="w-full sm:w-1/2">
                    <button className="w-full py-2 px-2 text-purple-950 border border-purple-950 rounded-lg hover:bg-purple-100 hover:text-black">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;
