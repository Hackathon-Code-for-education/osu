import { SharedClassNameEnum } from '../../uikit/main/styles/SharedClassNameEnum.ts';
import { PublicationItem } from './PublicationItem.tsx';
import { usePublicationList } from '../hooks/usePublicationList.ts';

import classes from './PublicationBlock.module.scss';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { ROUTE_USER_PUBLICATION } from '../../core/routes/constants/routePath.ts';

export const PublicationBlock = () => {
  const navigate = useNavigate();
  const list = usePublicationList();

  const handleClick = () => {
    navigate(ROUTE_USER_PUBLICATION);
  };

  return (
    <div className={SharedClassNameEnum.GRID}>
      <div className={classes.header}>
        <h1>Публикации</h1>
        <Button link label="Посмотреть все" onClick={handleClick} />
      </div>
      <div className={SharedClassNameEnum.GRID_2}>
        {list.map(item => (
          <PublicationItem
            key={item.id}
            id={item.id}
            src={item.src}
            tags={item.tags}
            date={item.date}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
