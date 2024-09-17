import React from 'react';
import TrainingSection from '../components/TrainingSection';
import CoursesSection from '../components/CoursesSection';

const SupervisorDashboard = () => {
  const trainings = [
    { name: 'Capacitación en Supervisión', description: 'Descripción de capacitación en supervisión.' },
    { name: 'Capacitación en Comunicación', description: 'Descripción de capacitación en comunicación.' },
  ];

  const courses = [
    { name: 'Curso de Gestión de Equipos', description: 'Descripción del curso de gestión de equipos.' },
    { name: 'Curso de Resolución de Conflictos', description: 'Descripción del curso de resolución de conflictos.' },
  ];

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard Supervisor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <TrainingSection title="Capacitación" trainings={trainings} />
        <CoursesSection title="Cursos" courses={courses} />
      </div>
    </div>
  );
};

export default SupervisorDashboard;
