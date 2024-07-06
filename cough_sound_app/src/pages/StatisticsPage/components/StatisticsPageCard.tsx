import React from 'react';

interface StatisticsPageCardProps {
    label: string;
    value: string | number;
}

const StatisticsPageCard: React.FC<StatisticsPageCardProps> = ({ label, value }) => {
    return (
        <div className="p-4 mb-4 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-purple-950">{label}</h3>
            <p className="text-2xl text-purple-600">{value}</p>
        </div>
    );
};

export default StatisticsPageCard;
