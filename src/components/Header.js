import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Sistema de Monitoreo</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Iniciar Sesión/Registro
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                FAQ/Soporte
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                SUSCRIPCION
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
