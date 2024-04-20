import { SharedClassNameEnum } from '../../uikit/main/styles/SharedClassNameEnum.ts';
import classes from './DepartmentPage.module.scss';
import { Chip } from 'primereact/chip';

export const DepartmentPage = () => {
  const data = {
    name: 'ПОВТАС',
    professions: ['Программист', 'Технический писатель', 'Аналитик'],
    description: 'Кафедра ПОВТАС такая крутая. Вы себе не представляете',
  };

  return (
    <div className={SharedClassNameEnum.GRID}>
      <h1>{data.name}</h1>
      <div>{data.description}</div>
      <div className={classes.professions}>
        {data.professions.map(item => (
          <Chip label={item} />
        ))}
      </div>
    </div>
  );
};
