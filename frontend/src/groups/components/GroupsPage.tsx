import classes from './GroupsPage.module.scss';
import { SharedClassNameEnum } from '../../uikit/main/styles/SharedClassNameEnum.ts';

import { useEffect, useRef } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Divider } from 'primereact/divider';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ROUTE_USER_PROFILE } from '../../core/routes/constants/routePath.ts';

export const GroupsPage = () => {
  const navigate = useNavigate();
  const ds = useRef<any>(null);

  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  const data = {
    groupName: '20ПИнж(б)РПиС',
    students: [
      {
        id: '1',
        image: 'https://static.tildacdn.com/tild6338-3666-4133-a633-643664333838/photo.jpg',
        fullName: 'Иванов Иван Иванович',
        stream: '4',
        rating: '146',
      },
      {
        id: '2',
        image: 'https://static.tildacdn.com/tild6338-3666-4133-a633-643664333838/photo.jpg',
        fullName: 'Иванов Иван Иванович',
        stream: '4',
        rating: '146',
      },
    ],
  };

  const itemTemplate = (data: any) => {
    return (
      <div className={classes.container} onClick={() => navigate(ROUTE_USER_PROFILE + '/' + data.id)}>
        <div className={classes.student}>
          <div className={classes.student_header}>
            <img src={data.image} width="80" alt={data.fullName} />
          </div>
          <div className={classNames(classes.student_content, SharedClassNameEnum.GRID)}>
            <div>{data.fullName}</div>
            <div>Поток: {data.stream} курс</div>
            <div>Общий рейтинг: {data.rating}</div>
          </div>
        </div>
        <Divider />
      </div>
    );
  };

  return (
    <div className={SharedClassNameEnum.GRID}>
      <h1>{data.groupName}</h1>

      <div className="card">
        <DataScroller
          ref={ds}
          value={data.students}
          itemTemplate={itemTemplate}
          rows={5}
          loader
          header="Список группы"
        />
      </div>
    </div>
  );
};
