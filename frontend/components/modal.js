"use client";

import { IoWarningOutline } from "react-icons/io5";

const ConfirmModal = ({
    title,
    message,
    onConfirm,
    onCancel,
}) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center md:items-start justify-center md:justify-end bg-black/40 p-4">
            <div className="w-[90%] max-w-md bg-[#f6f6f6] rounded-2xl shadow-xl p-6 animate-scaleIn">

                <div className="flex justify-center mb-4 text-red-500">
                    <IoWarningOutline className="text-5xl" />
                </div>

                <h2 className="text-xl font-semibold text-center text-gray-900">
                    {title}
                </h2>

                <p className="text-center text-gray-600 mt-2">
                    {message}
                </p>

                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onCancel}
                        className="cursor-pointer px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="cursor-pointer px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
