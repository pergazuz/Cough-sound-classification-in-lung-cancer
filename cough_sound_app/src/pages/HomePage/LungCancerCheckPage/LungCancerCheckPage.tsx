import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/welcome_logo.png';

const LungCancerCheckPage: React.FC = () => {
    const navigate = useNavigate();
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [recordingTime, setRecordingTime] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunks = useRef<Blob[]>([]);
    const intervalRef = useRef<number | null>(null);

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

            mediaRecorder.onstop = async () => {
                const blob = new Blob(chunks.current, { type: 'audio/wav' });
                chunks.current = [];
                setIsVisible(false);
                await new Promise(resolve => setTimeout(resolve, 500)); // Wait for fade-out to complete
                setIsLoading(true); // Start loading animation
                await sendAudioToBackend(blob);
                clearInterval(intervalRef.current!);
                setRecordingTime(0);
                setIsVisible(true); // Trigger fade-in for prediction
                setIsLoading(false); // Stop loading animation
            };

            mediaRecorder.start();
            setIsRecording(true);
            setIsVisible(true); // Trigger fade-in for recording time
            intervalRef.current = window.setInterval(() => {
                setRecordingTime((prevTime) => prevTime + 10); // Update every 10ms
            }, 10);
        } catch (error) {
            console.error('Error accessing the microphone', error);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setIsVisible(false); // Trigger fade-out for recording time
        }
    };

    const sendAudioToBackend = async (audioBlob: Blob) => {
        const formData = new FormData();
        formData.append('file', audioBlob, 'recording.wav');

        try {
            const response = await fetch('https://lung-cancer-cough-classification-backend.vercel.app/upload-audio', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            setPrediction(result.prediction);
        } catch (error) {
            console.error('Error sending audio to backend', error);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10); // Truncate to 2 digits
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
            <button onClick={handleBackClick} className="self-start mb-4 text-purple-950 hover:text-purple-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <h1 className="text-3xl font-bold text-purple-950 mb-8 text-center">Lung Cancer Check</h1>
            <img src={Logo} alt="Lung Check" className="w-80 h-80 sm:w-64 sm:h-80 md:w-80 md:h-80 mb-4 rounded-lg" />
            <div
                className={`p-4 mb-4 w-64 bg-white rounded-lg text-center transition-opacity duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } ${
                    prediction === 'Normal' ? 'shadow-lg shadow-green-700' : prediction === 'Abnormal' ? 'shadow-lg shadow-red-700' : ''
                }`}
            >
                {isRecording ? (
                    <>
                        <p className="text-lg font-bold text-purple-950">Recording:</p>
                        <p className="text-lg font-bold text-purple-950">{formatTime(recordingTime)}</p>
                    </>
                ) : (
                    prediction && <p className="text-lg font-bold text-purple-950">{`${prediction}`}</p>
                )}
            </div>
            <button
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className={`w-36 h-36 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center ${
                    isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                } text-white shadow-2xl transition transform hover:scale-105`}
            >
                {isRecording ? (
                    <FontAwesomeIcon icon={faStop} className="h-20 w-20 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                ) : isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin className="h-20 w-20 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                ) : (
                    <FontAwesomeIcon icon={faMicrophone} className="h-20 w-20 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                )}
            </button>
        </div>
    );
};

export default LungCancerCheckPage;
