import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

function Login(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const signUpPage = props.location.signUpPage;
    const [ isSignUpPage, setIsSignUpPage ] = useState(signUpPage);
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const login = () => {
        dispatch(authActions.login(user, password, history));
    }

  return (
      <div className="login-block">
          <div className="login-container">
              <p className="iniciar-sesion">
                  {isSignUpPage ? "Registrarte" : "Iniciar Sesión"}
              </p>
              <div className="email-box">
                  <input
                      className="search-input"
                      type="text"
                      placeholder="Email"
                      value={user}
                      onChange={(event) => setUser(event.target.value)}
                  />
              </div>
              <div className="contraseña-box">
                  <input
                      className="search-input"
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                  />
              </div>
              {isSignUpPage ? (
                  <>
                      <Link to="/sign-up" className="sesion-section">
                          <p className="link-registar">Comenzá!</p>
                      </Link>
                      <p className="registarte">
                          {" "}
                          Ya tenés cuenta?
                          <span
                              className="underline"
                              onClick={() => setIsSignUpPage(false)}
                          >
                              Iniciá sesión
                          </span>
                      </p>
                  </>
              ) : (
                  <>
                      <div onClick={login} className="sesion-section">
                      {/* <Link to="/home" className="sesion-section"> */}
                          <p className="link-registar"> Iniciar Sesión </p>
                      </div>
                      <p className="registarte">
                          {" "}
                          Aun no tienes cuenta?
                          <span
                              className="underline"
                              onClick={() => setIsSignUpPage(true)}
                          >
                              Registrate
                          </span>
                      </p>
                  </>
              )}
          </div>
      </div>
  );
}

export default Login;
