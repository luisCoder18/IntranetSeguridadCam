import React from 'react';
import TrainingSection from '../components/TrainingSection';
import CoursesSection from '../components/CoursesSection';

const EmployeeDashboard = () => {
  const trainings = [
    { name: 'Capacitación Básica', description: 'Descripción de capacitación básica.' },
    { name: 'Capacitación en Seguridad', description: 'Descripción de capacitación en seguridad.' },
  ];

  const courses = [
    { name: 'Curso de Introducción a la Empresa', description: 'Descripción del curso de introducción.' },
    { name: 'Curso de Mejora Continua', description: 'Descripción del curso de mejora continua.' },
  ];

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard Empleado</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <TrainingSection title="Capacitación" trainings={trainings} />
        <CoursesSection title="Cursos" courses={courses} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
