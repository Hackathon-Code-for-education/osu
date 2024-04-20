import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import {
  ROUTE_CHATS,
  ROUTE_SUPPORT,
} from '../../core/routes/constants/routePath.ts';

export const useMenuItem = () => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: 'Чаты',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_CHATS);
      },
    },
    {
      label: 'Поддержка',
      icon: 'pi pi-fw pi-sitemap',
      command: () => {
        navigate(ROUTE_SUPPORT);
      },
    },
  ];

  return items;
};
