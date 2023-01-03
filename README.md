import React from 'react';

const Modal = ({ text, onOk, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-auto max-w-xs bg-white rounded-md shadow-md">
        <div className="py-4 px-6 text-center">
          <p className="text-xl font-semibold mb-4">{text}</p>
          <div className="flex justify-between">
            <button onClick={onOk} className="px-4 py-2 font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">OK</button>
            <button onClick={onCancel} className="px-4 py-2 font-semibold rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:bg-indigo-100">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
