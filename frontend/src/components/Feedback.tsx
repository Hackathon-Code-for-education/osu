import { Rating } from 'primereact/rating';
import { Panel } from 'primereact/panel';

import classes from './Feedback.module.scss';

interface IFeedbackItem {
  id: number;
  text: string;
  rating: number;
  userName: string;
}

export const Feedback = () => {
  const feedbackData: IFeedbackItem[] = [
    {
      id: 1,
      text: 'Молодцы!',
      rating: 5,
      userName: 'Username',
    },
    {
      id: 2,
      text: 'Не работает',
      rating: 1,
      userName: 'Username 2',
    },
  ];

  return (
    <div>
      <h1 className={classes.title}>Отзывы пользователей</h1>
      <div className={classes.feedbackList}>
        {feedbackData.map(item => (
          <Panel
            headerTemplate={
              <div className={classes.header}>
                <div>{item.userName}</div>
                <Rating value={item.rating} readOnly cancel={false} />
              </div>
            }
            key={item.id}
          >
            <p className="m-0">{item.text}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
};
