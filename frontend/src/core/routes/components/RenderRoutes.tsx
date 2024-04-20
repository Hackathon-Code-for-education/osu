import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import equal from 'fast-deep-equal';

import { getRoutes } from '../common/getRoutes.ts';
import { useAppSelector } from '../../store/hooks/useAppSelector.ts';
import { AuthSelector } from '../../../auth/selectors/AuthSelector.ts';

export const RenderRoutes = () => {
  const isAuthenticated = useAppSelector(AuthSelector.getIsAuthenticated);
  const user = useAppSelector(AuthSelector.getUser, equal);

  const router = getRoutes(user?.role, isAuthenticated);

  return <RouterProvider router={createBrowserRouter(router)} />;
};
