import React from 'react';
import TrainingSection from '../components/TrainingSection';
import CoursesSection from '../components/CoursesSection';

const AdminDashboard = () => {
  const trainings = [
    { name: 'Capacitación Administrativa', description: 'Descripción de capacitación administrativa.' },
    { name: 'Capacitación en Gestión de Proyectos', description: 'Descripción de capacitación en gestión de proyectos.' },
  ];

  const courses = [
    { name: 'Curso de Liderazgo', description: 'Descripción del curso de liderazgo.' },
    { name: 'Curso de Estrategia Empresarial', description: 'Descripción del curso de estrategia empresarial.' },
  ];

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <TrainingSection title="Capacitación" trainings={trainings} />
        <CoursesSection title="Cursos" courses={courses} />
      </div>
    </div>
  );
};

export default AdminDashboard;
