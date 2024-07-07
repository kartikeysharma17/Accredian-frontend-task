// components/Modal.js
import { React } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-full max-w-lg">
        <h2 className="text-2xl mb-4">Refer a Friend</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="referrerName"
            >
              Referrer Name
            </label>
            <input
              type="text"
              id="refferal_name"
              name="refferal_name"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="referrerEmail"
            >
              Referrer Email
            </label>
            <input
              type="email"
              id="refferal_email"
              name="refferal_email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="refereeName"
            >
              Referee Name
            </label>
            <input
              type="text"
              id="reffree_name"
              name="reffree_name"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="refereeEmail"
            >
              Referee Email
            </label>
            <input
              type="email"
              id="reffree_email"
              name="reffree_email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
