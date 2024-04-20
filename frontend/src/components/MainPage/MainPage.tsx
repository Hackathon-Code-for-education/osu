import classes from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  // const studentsData = [
  //   {
  //     id: 1,
  //     name: 'Адамович Роман',
  //     city: 'Оренбург',
  //     university: 'ОГУ',
  //     faculty: 'ИМИТ',
  //     rate: 23,
  //   },
  //   {
  //     id: 2,
  //     name: 'Григорьев Игорь',
  //     city: 'Ичкерия',
  //     university: 'ИМГУ',
  //     faculty: 'АЛМИ',
  //     rate: 21,
  //   },
  //   {
  //     id: 3,
  //     name: 'Викторов Денис',
  //     city: 'Екатеринбург',
  //     university: 'СГУ',
  //     faculty: 'АКИ',
  //     rate: 20,
  //   },
  //   {
  //     id: 4,
  //     name: 'Шатов Максим',
  //     city: 'Оренбург',
  //     university: 'ОГУ',
  //     faculty: 'ИМИТ',
  //     rate: 17,
  //   },
  //   {
  //     id: 5,
  //     name: 'Ткаченко Марина',
  //     city: 'Оренбург',
  //     university: 'ОГУ',
  //     faculty: 'ИМИТ',
  //     rate: 15,
  //   },
  //   {
  //     id: 6,
  //     name: 'Колобова Мария',
  //     city: 'Оренбург',
  //     university: 'ОГУ',
  //     faculty: 'ИМИТ',
  //     rate: 10,
  //   },
  // ];
  const universityData = [
    {
      id: 1,
      name: 'ОГУ',
      rate: 33,
      faculty: [
        {
          id: 1,
          name: 'ИМИТ',
          rate: 20,
        },
        {
          id: 2,
          name: 'Аки',
          rate: 11,
        },
        {
          id: 3,
          name: 'ИНШ',
          rate: 2,
        },
      ],
    },
    {
      id: 2,
      name: 'Оренбургский государственный университет',
      rate: 33,
      faculty: [
        {
          id: 1,
          name: 'Институт математики и информационных технологий',
          rate: 20,
        },
        {
          id: 2,
          name: 'Аэрокосмический институ',
          rate: 11,
        },
        {
          id: 3,
          name: 'МЧ',
          rate: 2,
        },
      ],
    },
    {
      id: 2,
      name: 'МГУ',
      rate: 33,
      faculty: [
        {
          id: 1,
          name: 'ЫВА',
          rate: 20,
        },
        {
          id: 2,
          name: 'ФА',
          rate: 11,
        },
        {
          id: 3,
          name: 'МЧ',
          rate: 2,
        },
        {
          id: 2,
          name: 'МГУ',
          rate: 33,
          faculty: [
            {
              id: 1,
              name: 'ЫВА',
              rate: 20,
            },
            {
              id: 2,
              name: 'ФА',
              rate: 11,
            },
            {
              id: 3,
              name: 'МЧ',
              rate: 2,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className={classes.mainInfoGroup}>
        <div className={classes.avatar}></div>
        <div className={classes.infoGroup}>
          <h1>LifeCourse - виртуальный мир студента</h1>
          <div className={classes.infoGroup__text}>
            LifeCourse – незаменимый помощник для всех участников образовательного процесса!
            <br />
            <br />
            {/*Приложение LifeCourse – это мощный инструмент, который значительно упрощает жизнь студентам, преподавателям,*/}
            {/*соискателям, работодателям, родителям и абитуриентам.*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*Приложение LifeCourse разработано с учётом потребностей всех участников образовательного процесса.*/}
            {/*Преподаватели, соискатели, работодатели, родители и абитуриенты также найдут в нём полезные функции, которые*/}
            {/*сделают их жизнь проще и удобнее.*/}
          </div>
          <div className={classes.infoGroup__linkGroup}>
            <div onClick={() => navigate('/info/student')}>ВУЗАМ</div>
            <div onClick={() => navigate('/info/student')}>СТУДЕНТАМ</div>
            <div onClick={() => navigate('/info/student')}>ПРЕДПРИЯТИЯМ</div>
          </div>
        </div>
      </div>
      {/*<div className={classes.topStudents}>*/}
      {/*  <h2> Топ лучших студентов </h2>*/}
      {/*  <div className={classes.studentList}>*/}
      {/*    {studentsData.map(studet => (*/}
      {/*      <div className={classes.card}>*/}
      {/*        <div className={classes.card__avatar}></div>*/}
      {/*        <div className={classes.card__name}>{studet.name}</div>*/}
      {/*        <div className={classes.card__location}>*/}
      {/*          <div>*/}
      {/*            Город: <span>{studet.city}</span>*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            ВУЗ: <span>{studet.university}</span>*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            Факультет: <span>{studet.faculty}</span>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className={classes.card__rate}>{studet.rate} ★</div>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={classes.topUniversity}>
        <h2> Топ лучших ВУЗов </h2>
        <div className={classes.universityList}>
          {universityData.map(un => (
            <div className={classes.university__card}>
              <div className={classes.university__card_left}>
                <div className={classes.university__card__avatar}></div>
                <div className={classes.university__card__rate}>{un.rate} ★</div>
              </div>
              <div className={classes.university__card_right}>
                <div>{un.name}</div>
                <div>
                  {un.faculty.map(fc => (
                    <div className={classes.faculty}>
                      <div className={classes.faculty__name}>{fc.name}</div>
                      <div className={classes.faculty__rate}>{fc.rate} ★</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.footer}></div>
    </>
  );
};
