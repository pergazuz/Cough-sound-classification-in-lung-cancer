import React from 'react';
import WelcomeLogo from '../../assets/welcome_logo.png'; // Update the path as needed

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <h1 className="mt-4 text-3xl font-bold text-purple-950 text-center">Welcome Back</h1>
            <h2 className="text-5xl font-bold text-purple-950 text-center">Login</h2>
            <img src={WelcomeLogo} alt="Welcome" className="max-w-80 h-auto mt-4"/>
            <div className="mt-8 w-full max-w-md">
                <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"/>
                <div className="relative">
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"/>
                    <span className="absolute right-3 top-3 cursor-pointer">
                        <i className="eye-icon"></i> {/* Replace with actual eye icon */}
                    </span>
                </div>
                <div className="flex justify-end">
                    <a href="#" className="text-sm text-purple-950">Forgot Password?</a>
                </div>
                <button className="w-full py-2 mt-4 text-white bg-purple-950 rounded-lg hover:bg-purple-800">Login</button>
            </div>
            <p className="mt-4 text-sm text-purple-950">Don't have an account? <a href="/signup" className="font-bold text-purple-950">Sign Up</a></p>
        </div>
    );
};

export default LoginPage;
