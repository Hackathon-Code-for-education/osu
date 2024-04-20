import { RouteObject } from 'react-router-dom';

import { Layout } from '../../../main/components/Layout.tsx';
import { AuthPage } from '../../../auth/components/AuthPage.tsx';
import { NotFoundPage } from '../../../uikit/main/components/NotFoundPage.tsx';

import { ROUTE_MAIN_MENU } from './routePath.ts';
import { OPENID_CALLBACK_URL } from '../../config/urls.ts';

export const UNAUTH_ROUTES: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_MAIN_MENU,
        element: <AuthPage />,
      },
      {
        path: OPENID_CALLBACK_URL,
        element: <>Авторизация</>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
