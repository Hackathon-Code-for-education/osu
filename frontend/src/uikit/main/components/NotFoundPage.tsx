import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import { ROUTE_MAIN_MENU } from '../../../core/routes/constants/routePath.ts';
import { SharedClassNameEnum } from '../styles/SharedClassNameEnum.ts';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate(ROUTE_MAIN_MENU);
  };
  const onBack = () => {
    window.history.back();
  };

  return (
    <div className={classNames(SharedClassNameEnum.TEXT_20_REGULAR, styles.container)}>
      <div className={classNames(styles.errorCode)}>404</div>
      <div className={SharedClassNameEnum.TEXT_28_REGULAR}>Not found</div>
      <div className={styles.link}>
        You can go back to
        <Button className={SharedClassNameEnum.TEXT_20_REGULAR} link onClick={goToMain}>
          main page
        </Button>
      </div>
      <div className={styles.link}>
        Or do it
        <Button className={SharedClassNameEnum.TEXT_20_REGULAR} link onClick={onBack}>
          again
        </Button>
      </div>
    </div>
  );
};
