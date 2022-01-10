import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
  } = useAuth();

  return (
    <div className="login">
      <div className="loginContainer container">
        <h1>Добро пожаловать</h1>
        <input
          className="authInput"
          autoFocus
          placeholder="Email"
          type="text"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="errorMsg">{emailError}</p>
        <input
          className="authInput"
          autoFocus
          type="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="errorMsg">{passwordError}</p>
        {!hasAccount ? (
          <>
            <input
              className="authInput"
              autoFocus
              type="password"
              placeholder="Повторите пароль"
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </>
        ) : null}
        <p className="errorMsg">{confirmPasswordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              {email === "" || password === "" ? (
                <button className="authButton" onClick={handleLogin}>
                  Войти
                </button>
              ) : (
                <button className="authButton" onClick={handleLogin}>
                  <Link to="/">Войти</Link>
                </button>
              )}
              <p className="authP">
                <span>У вас нет аккаунта?</span>
                <span
                  className="authSpan"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Регистарция
                </span>
              </p>
            </>
          ) : (
            <>
              {password === confirmPassword ? (
                <>
                  {email === "" || password === "" ? (
                    <button className="authButton" onClick={handleSignUp}>
                      Зарегистрироваться
                    </button>
                  ) : (
                    <button className="authButton" onClick={handleSignUp}>
                      <Link to="/">Зарегистрироваться</Link>
                    </button>
                  )}
                  <p className="authP">
                    <span>У вас уже есть аккаунт?</span>
                    <span
                      className="authSpan"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Войти
                    </span>
                  </p>
                </>
              ) : (
                <p className="authP">Пароль не совпадает!</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
