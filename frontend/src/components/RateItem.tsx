import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import classes from './Rates.module.scss';

interface IRateItem {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  text: string;
}

export const RateItem = ({ title, subTitle, img, text }: IRateItem) => {
  const footer = (
    <>
      <Button label="Купить" />
    </>
  );

  const header = <img alt="Card" src={img} />;

  return (
    <Card
      title={title}
      subTitle={subTitle}
      footer={footer}
      header={header}
      className={classes.card}
      style={{ width: '300px' }}
    >
      <p className="m-0">{text}</p>
    </Card>
  );
};
