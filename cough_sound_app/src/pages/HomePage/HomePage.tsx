import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import LungCheck from '../../assets/lung_check.png';
import MedicalHistory from '../../assets/medical_history.png';
import FindingYourself from '../../assets/finding_yourself.png';
import LabResults from '../../assets/lab_result.png';
import DietChart from '../../assets/diet_chart.png';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <Header />
            <div className="w-full max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
                <Card imgSrc={LungCheck} title="Online Lung Check" altText="Lung Check" />
                <Card imgSrc={MedicalHistory} title="Medical History" altText="Medical History" />
                <Card imgSrc={FindingYourself} title="Finding Yourself" altText="Finding Yourself" />
                <Card imgSrc={LabResults} title="Lab Results" altText="Lab Results" />
                <Card imgSrc={DietChart} title="Your Diet Chart" altText="Diet Chart" />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
