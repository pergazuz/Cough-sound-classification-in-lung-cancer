import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import LogoutModal from './LogoutModal';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleConfirmLogout = () => {
        setIsModalVisible(false);
        navigate('/');
    };

    return (
        <>
            <header className="flex justify-between w-full max-w-6xl items-center mb-16 px-4 sm:px-0">
                <h1 className="text-2xl font-bold text-purple-950">{title}</h1>
                <FontAwesomeIcon
                    icon={faUserCircle}
                    size="2x"
                    className="text-purple-950 cursor-pointer"
                    onClick={handleProfileClick}
                />
            </header>
            <LogoutModal
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogout}
            />
        </>
    );
};

export default Header;
