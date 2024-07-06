import React from 'react';
import NotificationPageCard from './components/NotificationPageCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import notifications from './components/NotificationPageDemo';

const NotificationPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            <Header title="Notifications" />
            <div className={`w-full max-w-6xl ${notifications.length > 0 ? '' : 'flex flex-1 flex-col items-center justify-center h-full'}`}>
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <NotificationPageCard
                            key={index}
                            title={notification.title}
                            description={notification.description}
                            dotColor={notification.dotColor}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-lg font-semibold text-purple-950">No notifications available</p>
                        <p className="text-sm text-purple-800">You have no new notifications at this moment.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default NotificationPage;
