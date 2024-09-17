import React from 'react';
import CameraCard from '../components/CameraCard';
import SubscriptionSection from '../components/SubscriptionSection';

function HomePage() {
  const cameras = [
    { id: 1, imageSrc: '/images/1.jpg', description: 'Cámara 1' },
    { id: 2, imageSrc: '/images/10.jpg', description: 'Cámara 2' },
    { id: 3, imageSrc: '/images/12.jpg', description: 'Cámara 3' },
    { id: 4, imageSrc: '/images/4.jpg', description: 'Cámara 4' },
    { id: 5, imageSrc: '/images/14.jpg', description: 'Cámara 5' },
    { id: 6, imageSrc: '/images/6.jpg', description: 'Cámara 6' },
    { id: 7, imageSrc: '/images/7.jpg', description: 'Cámara 7' },
    { id: 8, imageSrc: '/images/8.jpg', description: 'Cámara 8' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">Inicio</h2>
        <p className="text-lg mb-8 text-center text-gray-300">Visualización del sistema de monitoreo.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cameras.map(camera => (
            <CameraCard
              key={camera.id}
              imageSrc={camera.imageSrc}
              description={camera.description}
            />
          ))}
        </div>
        <SubscriptionSection />
      </div>
    </div>
  );
}

export default HomePage;
