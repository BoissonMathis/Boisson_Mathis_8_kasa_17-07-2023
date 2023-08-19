import { Link } from "react-router-dom";
import "../Style/Page.scss";
import "../Error404/Error404.scss";

function Error404() {
  return (
    <div>
      <div className="body error-404-page">
        <span className="font288 red error-404">404</span>
        <span className="font36 red error-message">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <Link to="/" className="font18 red underline to-home">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error404;
