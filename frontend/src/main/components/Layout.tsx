import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header.tsx';
import classes from './Layout.module.scss';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Outlet />
      </div>
    </div>
  );
};
