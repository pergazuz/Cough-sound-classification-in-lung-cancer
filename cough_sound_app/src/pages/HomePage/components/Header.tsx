import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between w-full max-w-6xl items-center mb-8 px-4 sm:px-0">
            <h1 className="text-2xl font-bold text-purple-950">👋 Hi Sky!</h1>
            <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-purple-950" />
        </header>
    );
};

export default Header;