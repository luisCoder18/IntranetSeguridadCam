import React from 'react';

function SubscriptionSection() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 mt-12 shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">¡Suscríbete para recibir más Funcionalidades!</h2>
      <p className="text-center text-gray-400 mb-8">
        Suscríbete a nuestro boletín y mantente al día con las últimas noticias y actualizaciones del sistema.
      </p>
      <form className="flex flex-col md:flex-row justify-center items-center">
        <input
          type="email"
          placeholder="Introduce tu correo electrónico"
          className="w-full md:w-2/3 p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-blue-500 mb-4 md:mb-0 md:mr-4"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
}

export default SubscriptionSection;
