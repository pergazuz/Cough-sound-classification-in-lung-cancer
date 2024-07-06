import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    title: string;
}
const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header className="flex justify-between w-full max-w-6xl items-center mb-16 px-4 sm:px-0">
            <h1 className="text-2xl font-bold text-purple-950">{title}</h1>
            <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-purple-950"/>
        </header>
    );
};

export default Header;
