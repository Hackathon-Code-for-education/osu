import { BASE_ROUTES } from '../constants/baseRoutes.tsx';
import { RouteObject } from 'react-router-dom';
import { UserRolesEnum } from '../../../users/enums/UserRolesEnum.ts';

export const getRoutes = (role: UserRolesEnum | undefined, isAuthenticated: boolean): RouteObject[] => {
  if (!isAuthenticated && typeof role === 'undefined') {
    return BASE_ROUTES;
  }

  return BASE_ROUTES;
};
