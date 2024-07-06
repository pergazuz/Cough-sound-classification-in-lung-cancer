import React from 'react';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const LogoutModal: React.FC<ModalProps> = ({ isVisible, onClose, onConfirm }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80">
                <h2 className="text-lg font-semibold text-purple-950 mb-4">Logout</h2>
                <p className="text-sm text-purple-800 mb-6">Are you sure you want to logout?</p>
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 mr-2 text-sm text-white bg-purple-900 rounded hover:bg-purple-800"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                    <button
                        className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded hover:bg-purple-100"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
