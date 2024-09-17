import React, { useState } from 'react';

function CameraCard({ imageSrc, description }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800">
      <img
        src={imageSrc}
        alt={description}
        className="w-full h-48 object-cover rounded-t-lg shadow-md"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{description}</h3>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-gray-700 text-white rounded-lg shadow-lg p-2">
            <ul>
              <li className="py-1 px-2 hover:bg-gray-600 cursor-pointer">Ver detalles</li>
              <li className="py-1 px-2 hover:bg-gray-600 cursor-pointer">Configurar</li>
              <li className="py-1 px-2 hover:bg-gray-600 cursor-pointer">Eliminar</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CameraCard;
