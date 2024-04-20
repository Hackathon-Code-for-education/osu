import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import classes from './AuthPage.module.scss';

export const AuthPage = () => {
  const [auth, setAuth] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const togglePage = () => {
    setAuth(prev => !prev);
  };

  const signin = () => {
    // вход пользователя
  };

  const signup = () => {
    // регистрация пользователя
  };

  return (
    <div style={{ padding: '30px 0' }}>
      {auth ? (
        <>
          <div className={classes.authorization}>
            <div className={classes.inputGroup}>
              <span className="p-float-label">
                <InputText
                  id="username"
                  data-testid="login-test"
                  value={mail}
                  onChange={e => setMail(e.target.value)}
                />
                <label htmlFor="username">Логин</label>
              </span>
              <span className="p-float-label">
                <InputText
                  type={'password'}
                  id="password"
                  data-testid="password-test"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="username">Пароль</label>
              </span>
              <Button label="Войти" onClick={signin} />
            </div>
            <div className={classes.infoCard_signIn}>
              <div>
                <h2 className={classes.welcomeTitle}>Здравствуйте👋</h2>
                <p className={classes.text}>
                  Если Вы еще не зарегистрированы в нашей системе, будем рады Вашему присоединению!
                </p>
                <Button onClick={togglePage}>Зарегистрироваться</Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.authorization}>
            <div className={classes.infoCard_signIn}>
              <div>
                <h2 className={classes.welcomeTitle}>Уже есть аккаунт?</h2>
                <p className={classes.text}>Бцдем рады Вашему возвращению.</p>
                <Button onClick={togglePage}>Войти</Button>
              </div>
            </div>
            <div className={classes.inputGroup}>
              <span className="p-float-label">
                <InputText id="username" value={mail} onChange={e => setMail(e.target.value)} />
                <label htmlFor="username">Логин</label>
              </span>
              <span className="p-float-label">
                <InputText
                  type={'password'}
                  id="username"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="username">Пароль</label>
              </span>
              <Button label="Зарегестрироваться" onClick={signup} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
