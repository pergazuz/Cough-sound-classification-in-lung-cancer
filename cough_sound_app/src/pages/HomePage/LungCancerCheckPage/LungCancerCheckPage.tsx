import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/welcome_logo.png';

const LungCancerCheckPage: React.FC = () => {
    const navigate = useNavigate();
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunks = useRef<Blob[]>([]);

    const handleBackClick = () => {
        navigate('/home');
    };

    const handleStartRecording = async () => {
        if (isRecording) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                chunks.current.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks.current, { type: 'audio/wav' });
                chunks.current = [];
                const audioURL = URL.createObjectURL(blob);
                const audio = new Audio(audioURL);
                audio.play();
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing the microphone', error);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <button onClick={handleBackClick} className="self-start mb-4 text-purple-950">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <h1 className="text-3xl font-bold text-purple-950 mb-8 text-center">Lung cancer check</h1>
            <img src={Logo} alt="Lung Check" className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-8" />
            <button
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center ${isRecording ? 'bg-red-600' : 'bg-blue-600'} text-white`}
            >
                {isRecording ? (
                    <FontAwesomeIcon icon={faStop} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                ) : (
                    <FontAwesomeIcon icon={faMicrophone} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                )}
            </button>
        </div>
    );
};

export default LungCancerCheckPage;
