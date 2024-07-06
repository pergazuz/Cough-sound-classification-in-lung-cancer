import React from 'react';

interface NotificationCardProps {
    title: string;
    description: string;
    dotColor: string;
}

const NotificationPageCard: React.FC<NotificationCardProps> = ({ title, description, dotColor }) => {
    return (
        <div className="flex items-start p-6 border-2 border-gray-200 bg-white shadow-sm rounded-lg mb-4">
            <span className={`w-3 h-3 rounded-full mr-4 mt-1 ${dotColor}`} />
            <div>
                <h3 className="text-lg font-semibold text-purple-950">{title}</h3>
                <p className="text-sm text-purple-800">{description}</p>
            </div>
        </div>
    );
};

export default NotificationPageCard;
