import React from 'react';

const TrainingSection = ({ title, trainings }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-blue-400 mb-4">{title}</h2>
    <ul className="space-y-4">
      {trainings.map((training, index) => (
        <li key={index} className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white">{training.name}</h3>
          <p className="text-gray-400">{training.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TrainingSection;
