import { useNavigate } from 'react-router-dom';
import { ROUTE_DEPARTMENT, ROUTE_FACULTY, ROUTE_GROUPS } from '../../core/routes/constants/routePath.ts';

export const useUserData = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'ФИО',
      value: 'Иванов Иван Иванович',
    },
    {
      label: 'Факультет/Институт',
      value: 'ИМИТ',
      onClick: () => {
        navigate(ROUTE_FACULTY);
      },
    },
    {
      label: 'Кафедра',
      value: 'ПОВТАС',
      onClick: () => {
        navigate(ROUTE_DEPARTMENT);
      },
    },
    {
      label: 'Поток',
      value: '4 курс',
    },
    {
      label: 'Группа',
      value: '20ПИнж(б)РПиС',
      onClick: () => {
        navigate(ROUTE_GROUPS);
      },
    },
    {
      label: 'Место в рейтинге',
      value: '1',
    },
  ];

  return items;
};
