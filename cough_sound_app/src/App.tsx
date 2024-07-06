import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import NotificationPage from './pages/NotificationPage/NotificationPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/*<Route path="/statistics" element={<StatisticsPage />} /> /!* Placeholder *!/*/}
            </Routes>
        </Router>
    );
};

export default App;
