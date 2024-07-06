import React, { useState } from 'react';
import WelcomeLogo from '../../assets/welcome_logo.png';
import { useNavigate } from 'react-router-dom';
import  { LoginUser } from './LoginUser.ts';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    // Demo user credentials
    const demoUser: LoginUser = {
        email: 'user@gmail.com',
        password: 'password'
    };

    // State for storing form inputs
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === demoUser.email && password === demoUser.password) {
            navigate('/home');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <h1 className="mt-4 text-3xl font-bold text-purple-950 text-center">Welcome Back</h1>
            <h2 className="text-5xl font-bold text-purple-950 text-center">Login</h2>
            <img src={WelcomeLogo} alt="Welcome" className="max-w-80 h-auto mt-4"/>
            <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
                {error && <div className="mb-4 text-red-600">{error}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <span className="absolute right-3 top-3 cursor-pointer">
                        <i className="eye-icon"></i> {/* Replace with actual eye icon */}
                    </span>
                </div>
                <div className="flex justify-end">
                    <a href="#" className="text-sm text-purple-950">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full py-2 mt-4 text-white bg-purple-950 rounded-lg hover:bg-purple-800">
                    Login
                </button>
            </form>
            <p className="mt-4 text-sm text-purple-950">Don't have an account? <a href="/signup" className="font-bold text-purple-950">Sign Up</a></p>
        </div>
    );
};

export default LoginPage;
