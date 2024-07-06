import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faChartBar, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-white py-8 border-t flex justify-around max-w-6xl px-4 sm:px-0">
            <button className="text-purple-950">
                <FontAwesomeIcon icon={faTh} size="lg" />
            </button>
            <button className="text-purple-950">
                <FontAwesomeIcon icon={faChartBar} size="lg" />
            </button>
            <button className="text-purple-950">
                <FontAwesomeIcon icon={faBell} size="lg" />
            </button>
            <button className="text-purple-950">
                <FontAwesomeIcon icon={faCog} size="lg" />
            </button>
        </footer>
    );
};

export default Footer;
