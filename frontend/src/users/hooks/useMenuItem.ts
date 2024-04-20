import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import {
  ROUTE_CHATS,
  ROUTE_MARKET,
  ROUTE_RATING,
  ROUTE_SUPPORT,
  ROUTE_VACANCIES,
} from '../../core/routes/constants/routePath.ts';

export const useMenuItem = () => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: 'Рейтинг',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_RATING);
      },
    },
    {
      label: 'Чаты',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_CHATS);
      },
    },
    {
      label: 'Вакансии',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_VACANCIES);
      },
    },
    {
      label: 'Поддержка',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_SUPPORT);
      },
    },
    {
      label: 'Маркет',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_MARKET);
      },
    },
  ];

  return items;
};
