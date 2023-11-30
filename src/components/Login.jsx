import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-cont">
      <h1>Iniciar Sesion</h1>
      <br />
      <br />
      <div className="form-cont">
        <form action="" className="form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
          <button type="submit" className="btn-submit">
            Iniciar Sesion
          </button>
        </form>
      </div>
      <br />
      <h3>No tienes cuenta aun? Registrate es gratis</h3>
      <br />
      <Link to={"/signup"} className="signup-btn">
        Registrarse
      </Link>
    </div>
  );
}

export default Login;
