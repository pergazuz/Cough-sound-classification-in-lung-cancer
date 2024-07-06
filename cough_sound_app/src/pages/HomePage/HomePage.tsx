import React from 'react';
import Header from '../Components/Header.tsx';
import HomePageCard from './components/HomePageCard.tsx';
import Footer from '../Components/Footer.tsx';
import LungCheck from '../../assets/lung_check.png';
import MedicalHistory from '../../assets/medical_history.png';
import FindingYourself from '../../assets/finding_yourself.png';
import LabResults from '../../assets/lab_result.png';
import DietChart from '../../assets/diet_chart.png';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <Header title="👋 Hi Sky!"/>
            <div className="w-full max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
                <HomePageCard imgSrc={LungCheck} title="Online Lung Check" altText="Lung Check" />
                <HomePageCard imgSrc={MedicalHistory} title="Medical History" altText="Medical History" />
                <HomePageCard imgSrc={FindingYourself} title="Finding Yourself" altText="Finding Yourself" />
                <HomePageCard imgSrc={LabResults} title="Lab Results" altText="Lab Results" />
                <HomePageCard imgSrc={DietChart} title="Your Diet Chart" altText="Diet Chart" />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;