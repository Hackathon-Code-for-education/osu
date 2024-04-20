import { MegaMenu } from 'primereact/megamenu';
import { SplitButton } from 'primereact/splitbutton';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import {
  ROUT_FEED,
  ROUTE_AUTH,
  ROUTE_MAIN_MENU,
  ROUTE_RATE,
  ROUTE_USER_PROFILE,
} from '../core/routes/constants/routePath.ts';
import { MenuItem } from 'primereact/menuitem';
import { useAppSelector } from '../core/store/hooks/useAppSelector.ts';
import { AuthSelector } from '../auth/selectors/AuthSelector.ts';
import HeaderLogo from '../../public/header-logo.svg';

export const Header = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector(AuthSelector.getIsAuthenticated);

  const btnItems = [
    {
      label: 'Выйти',
      icon: 'pi pi-sign-out',
      command: () => {
        navigate(ROUTE_AUTH);
      },
    },
  ];

  const signin = () => {
    navigate(ROUTE_AUTH);
  };

  const profile = () => {
    navigate(ROUTE_USER_PROFILE);
  };

  const start = (
    <img
      alt="logo"
      src={HeaderLogo}
      onClick={() => navigate(ROUTE_MAIN_MENU)}
      height="40"
      className="mr-2"
      style={{ cursor: 'pointer' }}
    />
  );

  const end = useMemo(() => {
    if (!isAuthenticated) {
      return <Button label="Войти" icon="pi pi-sign-in" onClick={signin} />;
    }

    return <SplitButton label="Личный кабинет" icon="pi pi-user" model={btnItems} onClick={profile} />;
  }, [isAuthenticated]);

  const items: MenuItem[] = useMemo(
    () => [
      {
        label: 'Новости',
        command: () => {
          navigate(ROUT_FEED);
        },
      },
      {
        label: 'Рейтинг',
        command: () => {
          navigate(ROUTE_RATE);
        },
      },
      // {
      //   label: 'Внедрение',
      //   command: () => {
      //     navigate(ROUTE_INTEGRATION);
      //   },
      // },
      // {
      //   label: 'Отзывы',
      //   command: () => {
      //     navigate(ROUTE_FEEDBACK);
      //   },
      // },
    ],
    [],
  );

  return (
    <MegaMenu
      orientation="horizontal"
      model={items}
      start={start}
      end={end}
      breakpoint="960px"
      style={{ position: 'sticky', padding: '10px 50px' }}
    />
  );
};
