import classes from './Rates.module.scss';
import { RateItem } from './RateItem';

const rateData = [
  {
    id: 0,
    title: 'Бесплатно',
    subTitle: '0p.',
    img: 'https://primefaces.org/cdn/primereact/images/usercard.png',
    text: 'Бесплатно! Покупайте',
  },
  {
    id: 1,
    title: 'Малый бизнес',
    subTitle: '50p.',
    img: 'https://primefaces.org/cdn/primereact/images/usercard.png',
    text: 'Решение для малого бизнеса. 50 рублей',
  },
  {
    id: 2,
    title: 'предприятие',
    subTitle: '100p.',
    img: 'https://primefaces.org/cdn/primereact/images/usercard.png',
    text: 'Для предприятия 100 рублей',
  },
  {
    id: 3,
    title: 'Корпорация',
    subTitle: '1000p.',
    img: 'https://primefaces.org/cdn/primereact/images/usercard.png',
    text: 'тыща',
  },
];

export const Rates = () => {
  return (
    <div>
      <div className={classes.cardList}>
        {rateData.map(el => (
          <RateItem title={el.title} subTitle={el.subTitle} text={el.text} img={el.img} id={el.id} key={el.id} />
        ))}
      </div>
    </div>
  );
};
