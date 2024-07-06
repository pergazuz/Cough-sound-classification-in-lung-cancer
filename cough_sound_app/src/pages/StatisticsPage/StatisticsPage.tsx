import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import StatisticsPageCard from './components/StatisticsPageCard';

const statisticsData = [
    // { label: 'Total Users', value: 1200 },
    // { label: 'Active Users', value: 900 },
    // { label: 'New Signups', value: 300 },
    // { label: 'Revenue', value: '$12,000' },
];

const StatisticsPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <Header title="Statistics" />
            <div className={`w-full max-w-6xl ${statisticsData.length > 0 ? '' : 'flex flex-1 flex-col items-center justify-center h-full'}`}>
                {statisticsData.length > 0 ? (
                    statisticsData.map((stat, index) => (
                        <StatisticsPageCard key={index} label={stat.label} value={stat.value} />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-lg font-semibold text-purple-950">No statistics available</p>
                        <p className="text-sm text-purple-800">There are no statistics to display at this moment.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default StatisticsPage;
