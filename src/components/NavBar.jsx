import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="title">
      <h1 className="title-text">Argentina Programa 4.0 React Ecommerce</h1>
      <div className="log">
        <Link className="log-btn" to="/">
          Home{" "}
        </Link>
        <Link className="log-btn" to="login">
          Iniciar Sesion
        </Link>
        <Link className="log-btn" to="signup">
          Registro
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
