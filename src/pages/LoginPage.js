function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="username">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ingrese su usuario"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition duration-200"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
  