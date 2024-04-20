import { Knob } from 'primereact/knob';
import classNames from 'classnames';
import { SharedClassNameEnum } from '../../uikit/main/styles/SharedClassNameEnum.ts';

import classes from './RatingBlock.module.scss';

export const RatingBlock = () => {
  const data = [
    {
      type: 'Наука',
      value: 80,
      level: 1,
    },
    {
      type: 'Спорт',
      value: 80,
      level: 1,
    },
    {
      type: 'Творчество',
      value: 80,
      level: 1,
    },
    {
      type: 'Волонтерство',
      value: 80,
      level: 1,
    },
  ];

  return (
    <div className={SharedClassNameEnum.GRID}>
      <h1>Достижения</h1>
      <div className={classes.rating_total}>
        <h2>Всего</h2>
        <div className={classes.achievement}>
          <Knob className={classes.knob} size={300} readOnly value={146} max={200} />
        </div>
      </div>
      <h2>По категориям</h2>
      <div className={classNames(classes.container, SharedClassNameEnum.GRID_4)}>
        {data.map(item => {
          return (
            <div className={classes.achievement} key={item.type}>
              <label>{item.type}</label>
              <Knob className={classes.knob} readOnly value={item.value} min={0} max={100} size={100} />
              <div>{item.level} уровень</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
