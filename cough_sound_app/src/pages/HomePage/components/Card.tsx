import React from 'react';

interface CardProps {
    imgSrc: string;
    title: string;
    altText: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, altText }) => {
    return (
        <div className="flex items-center p-4 bg-gray-100 rounded-lg border-2 hover:border-purple-800">
            <img src={imgSrc} alt={altText} className="w-24 h-20" />
            <p className="ml-4 text-xl font-semibold text-purple-950">{title}</p>
        </div>
    );
};

export default Card;
