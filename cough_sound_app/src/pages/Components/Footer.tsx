import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faChartBar, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="z-2 fixed bottom-0 w-full bg-white py-6 border-t flex justify-around max-w-6xl px-4 sm:px-0">
            <NavLink
                to="/home"
                className={({ isActive }) =>
                    isActive ? "text-purple-950" : "text-gray-600"
                }
            >
                <FontAwesomeIcon icon={faTh} size="lg" />
            </NavLink>
            <NavLink
                to="/statistics"
                className={({ isActive }) =>
                    isActive ? "text-purple-950" : "text-gray-600"
                }
            >
                <FontAwesomeIcon icon={faChartBar} size="lg" />
            </NavLink>
            <NavLink
                to="/notifications"
                className={({ isActive }) =>
                    isActive ? "text-purple-950" : "text-gray-600"
                }
            >
                <FontAwesomeIcon icon={faBell} size="lg" />
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    isActive ? "text-purple-950" : "text-gray-600"
                }
            >
                <FontAwesomeIcon icon={faCog} size="lg" />
            </NavLink>
        </footer>
    );
};

export default Footer;
