import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faEye, faShieldAlt, faVolumeUp, faGlobe, faUserCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const settingsOptions = [
    { icon: faUser, label: 'Account' },
    { icon: faBell, label: 'Notification' },
    { icon: faEye, label: 'Appearance' },
    { icon: faShieldAlt, label: 'Privacy & Security' },
    { icon: faVolumeUp, label: 'Sound' },
    { icon: faGlobe, label: 'Language' },
];

const SettingsPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <Header title="Settings" />
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="flex flex-col items-center mt-8 mb-8">
                    <FontAwesomeIcon icon={faUserCircle} size="6x" className="text-purple-950" />
                    <h2 className="text-2xl font-bold text-purple-950 mt-4">Sky</h2>
                    <p className="text-sm text-purple-800">user@gmail.com</p>
                </div>
                <div className="w-full">
                    {settingsOptions.map((option, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 border-b-2 border-gray-200 hover:bg-purple-100 transition-colors duration-300"
                        >
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={option.icon} className="text-purple-700" />
                                <span className="ml-4 text-lg text-purple-950">{option.label}</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-purple-600" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SettingsPage;
