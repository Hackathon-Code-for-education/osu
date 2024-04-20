import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PUBLICATION } from '../../core/routes/constants/routePath.ts';
import classNames from 'classnames';
import classes from './PublicationItem.module.scss';

interface IProps {
  id: string;
  src: string;
  date: string;
  text: string;
  tags: string[];
}

export const PublicationItem = ({ id, src, tags, date, text }: IProps) => {
  const navigate = useNavigate();

  const header = <img alt="Card" src={src} />;
  const footer = (
    <div className={classes.footer}>
      <div className={classes.tags}>
        {tags.map(tag => (
          <Chip label={tag} />
        ))}
      </div>
      <div>{date}</div>
    </div>
  );

  const goToPublication = () => {
    navigate(ROUTE_PUBLICATION + '/' + id);
  };

  return (
    <Card footer={footer} header={header} className={classNames('md:w-25rem', classes.card)} onClick={goToPublication}>
      <p className={classNames('m-0', classes.card)}>{text}</p>
    </Card>
  );
};
