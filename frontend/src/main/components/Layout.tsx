import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '../../components/Header.tsx';
import classes from './Layout.module.scss';
import { Footer } from '../../components/MainPage/Footer.tsx';

export const Layout = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Outlet />
      </div>
      {location.pathname === '/' ? <Footer /> : <></>}
    </div>
  );
};
