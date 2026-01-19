import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found">
      <img src="/assets/cookies-factory-logo.png" alt="Cookies The Factory Logo" />
      <header>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <p>Esta es la única página disponible en este sitio.</p>
        <p>
          <Link to="/">Volver a Términos y Condiciones</Link>
        </p>
      </header>
    </main>
  );
}

export default NotFound;
