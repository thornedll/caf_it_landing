import React from 'react';

import classes from "./Teachers.module.css";

// const TEACHERS_CARDS_DATA = {
//   blockTitle: {
//     title: 'Meet the Roadmap',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
//   },
//   posts: [
//     {
//       date: '29 January 2019',
//       title: 'Join new server hosting',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor labore dolore',
//     },
//     {
//       date: '17 April 2019',
//       title: 'Mining coin with latest gpu',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor labore dolore',
//     },
//     {
//       date: '31 October 2019',
//       title: 'Turn new website with design',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor labore dolore',
//     },
//   ],
// };

const TeachersCards = () => {
  // const { blockTitle, posts } = TEACHERS_CARDS_DATA;
  return (
    <article className={classes.flow}>
      <div className={classes.team}>
        <ul className={classes.autoGrid} role="list">
          <li className={classes.list__elem}>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Гвоздева Татьяна Вадимовна</h2>
              <p>Заведующий кафедрой, к.т.н., доцент</p>
              <img
                alt="Anita Simmons"
                src="http://ivt.ispu.ru/images/it/personal/it_1.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Баллод Борис Анатольевич</h2>
              <p>Доцент, к.т.н.</p>
              <img
                alt="Profile shot for Celina Harris"
                src="http://ivt.ispu.ru/images/it/personal/it_2.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Буйлов Павел Витальевич</h2>
              <p>Доцент, к.т.н.</p>
              <img
                alt="Profile shot for Ruby Morris"
                src="http://ivt.ispu.ru/images/it/personal/it_3.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Егорова Надежда Евгеньевна</h2>
              <p>Доцент, к.ф.-м.н.</p>
              <img
                alt="Profile shot for Nicholas Castro"
                src="http://ivt.ispu.ru/images/it/personal/it_4.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Елизарова Надежда Николаевна</h2>
              <p>Доцент, к.т.н.</p>
              <img
                alt="Profile shot for Marc Dixon"
                src="http://ivt.ispu.ru/images/it/personal/it_5.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Залипаева Елена Анатольевна</h2>
              <p>Старший преподаватель</p>
              <img
                alt="Profile shot for Chad"
                src="http://ivt.ispu.ru/images/it/personal/it_6.jpg"
              />
            </a>
          </li>
          <li className={classes.list__elem}>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Марфутина Анна Николаевна</h2>
              <p>Старший преподаватель</p>
              <img
                alt="Anita Simmons"
                src="http://ivt.ispu.ru/images/it/personal/it_7.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Локов Антон Андреевич</h2>
              <p>Ассистент</p>
              <img
                alt="Profile shot for Celina Harris"
                src="http://ispu.ru/files/u2/Lokov.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Мурин Александр Вячеславович</h2>
              <p>Доцент, к.т.н.</p>
              <img
                alt="Profile shot for Ruby Morris"
                src="http://ivt.ispu.ru/images/it/personal/it_8.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Падылина Александра Леонидовна</h2>
              <p>Доцент, к.т.н.</p>
              <img
                alt="Profile shot for Nicholas Castro"
                src="http://ivt.ispu.ru/images/it/personal/it_9.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Рудаков Николай Владимирович</h2>
              <p>Старший преподаватель</p>
              <img
                alt="Profile shot for Marc Dixon"
                src="http://ivt.ispu.ru/images/it/personal/it_10.jpg"
              />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" className={classes.profile}>
              <h2 className={classes.profile__name}>Ясинский Игорь Фёдорович</h2>
              <p>Доцент, к.т.н.</p>
              <img
                alt="Profile shot for Chad"
                src="http://ivt.ispu.ru/images/it/personal/it_11.jpg"
              />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default TeachersCards;
