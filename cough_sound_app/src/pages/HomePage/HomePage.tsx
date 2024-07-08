import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import LungCheckIcon from '../../assets/lung_check.png';
import MedicalHistoryIcon from '../../assets/medical_history.png';
import FindingYourselfIcon from '../../assets/finding_yourself.png';
import LabResultsIcon from '../../assets/lab_result.png';
import DietChartIcon from '../../assets/diet_chart.png';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <Header title="Hi Sky!" />
            <div className="w-full max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
                <Link to="/lung-cancer-check" className="flex items-center p-4 bg-gray-100 rounded-lg border-2 hover:border-gray-400">
                    <img src={LungCheckIcon} alt="Lung Check" className="w-24 h-20" />
                    <p className="ml-4 text-xl font-semibold text-purple-950">Lung Check</p>
                </Link>
                <div className="flex items-center p-4 bg-gray-100 rounded-lg border-2">
                    <img src={MedicalHistoryIcon} alt="Medical History" className="w-24 h-20" />
                    <p className="ml-4 text-xl font-semibold text-purple-950">Medical History</p>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-lg border-2">
                    <img src={FindingYourselfIcon} alt="Finding Yourself" className="w-24 h-20" />
                    <p className="ml-4 text-xl font-semibold text-purple-950">Finding Yourself</p>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-lg border-2">
                    <img src={LabResultsIcon} alt="Lab Results" className="w-24 h-20" />
                    <p className="ml-4 text-xl font-semibold text-purple-950">Lab Results</p>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-lg border-2">
                    <img src={DietChartIcon} alt="Diet Chart" className="w-24 h-20" />
                    <p className="ml-4 text-xl font-semibold text-purple-950">Your Diet Chart</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
