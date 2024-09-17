import CameraCard from '../components/CameraCard';

function DashboardPage() {
  // Ejemplo de datos de cámaras con imágenes locales
  const cameras = [
    { id: 1, imageSrc: '/images/1.jpg', description: 'Cámara 1' },
    { id: 2, imageSrc: '/images/2.jpg', description: 'Cámara 2' },
    { id: 3, imageSrc: '/images/3.jpg', description: 'Cámara 3' },
    { id: 4, imageSrc: '/images/4.jpg', description: 'Cámara 4' },
    { id: 5, imageSrc: '/images/5.jpg', description: 'Cámara 5' },
    { id: 6, imageSrc: '/images/6.jpg', description: 'Cámara 6' },
    { id: 7, imageSrc: '/images/7.jpg', description: 'Cámara 7' },
    { id: 8, imageSrc: '/images/8.jpg', description: 'Cámara 8' },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Dashboard</h2>
      <p className="text-lg mb-6 text-center">Visualización del dashboard del sistema.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cameras.map(camera => (
          <CameraCard
            key={camera.id}
            imageSrc={camera.imageSrc}
            description={camera.description}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
