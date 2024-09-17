import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-4 shadow-2xl">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/features" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Características
            </Link>
          </li>
          <li>
            <Link to="/technology" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Tecnología
            </Link>
          </li>
          <li>
            <Link to="/benefits" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Beneficios
            </Link>
          </li>
          <li>
            <Link to="/case-studies" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Casos de Estudio
            </Link>
          </li>
          <li>
            <Link to="/documentation" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Documentación
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/blog" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Noticias/Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/faq" className="block py-3 px-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition duration-300 ease-in-out">
              FAQ/Soporte
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
