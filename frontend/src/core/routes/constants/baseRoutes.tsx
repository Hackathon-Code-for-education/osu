import { RouteObject } from 'react-router-dom';

import {
  ROUTE_AUTH,
  ROUTE_USER_PROFILE,
} from './routePath.ts';
import { Layout } from '../../../main/components/Layout.tsx';
import { AuthPage } from '../../../auth/components/AuthPage.tsx';
import { UserProfilePage } from '../../../users/components/UserProfilePage.tsx';
import { NotFoundPage } from '../../../uikit/main/components/NotFoundPage.tsx';
import { OPENID_CALLBACK_URL } from '../../../api/constants/urls.ts';

export const BASE_ROUTES: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_AUTH,
        element: <AuthPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: OPENID_CALLBACK_URL,
        element: <>Авторизация</>,
      },

      {
        path: ROUTE_USER_PROFILE,
        element: <UserProfilePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
