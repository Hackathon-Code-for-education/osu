import { useNavigate } from 'react-router-dom';
import { usePublicationList } from '../hooks/usePublicationList.ts';
import { ROUTE_USER_PUBLICATION } from '../../core/routes/constants/routePath.ts';
import classes from './UserPublicationPage.module.scss';
import { Button } from 'primereact/button';
import { PublicationItem } from './PublicationItem.tsx';

export const UserPublicationPage = () => {
  const navigate = useNavigate();
  const list = usePublicationList();

  const handleClick = () => {
    navigate(ROUTE_USER_PUBLICATION);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Button link label="Посмотреть все" onClick={handleClick} />
      </div>
      {list.map(item => (
        <PublicationItem key={item.id} id={item.id} src={item.src} tags={item.tags} date={item.date} text={item.text} />
      ))}
    </div>
  );
};
