import React from 'react';

import classes from './RoadmapNew.module.css';

const RoadmapNew = () => {
  return (
    <div>
      <ul className={classes.timeline}>
        <li>
          <div className={classes.directionR}>
            <div className={classes.flagWrapper}>
              <span className={classes.flag}>Образование кафедры</span>
              <span className={classes.timeWrapper}><span className={classes.time}>1992</span></span>
            </div>
            <div className={classes.desc}>Кафедра информационных технологий (ИТ) образована в 1992 году. С момента образования её возглавлял к.т.н., доцент Александр Аркадьевич Белов. С самого начала своей образовательной деятельности кафедра организовала подготовку специалистов по двум специальностям: “Документоведение и документационное обеспечение управления”, “Прикладная информатика”.</div>
          </div>
        </li>
        <li>
          <div className={classes.directionL}>
            <div className={classes.flagWrapper}>
              <span className={classes.flag}>Мы - лучшие в России</span>
              <span className={classes.timeWrapper}><span className={classes.time}></span></span>
            </div>
            <div className={classes.desc}>В течение последних лет по итогам крупномасштабного проекта, осуществляемого Гильдией экспертов в сфере профессионального образования и Национальным центром общественно-профессиональной аккредитации, система подготовки специалистов по “Прикладной информатике” признавалась одной из “Лучших образовательных программ инновационной России”.</div>
          </div>
        </li>
        <li>
          <div className={classes.directionR}>
            <div className={classes.flagWrapper}>
              <span className={classes.flag}>Золотая медаль</span>
              <span className={classes.timeWrapper}><span className={classes.time}>2013</span></span>
            </div>
            <div className={classes.desc}>В рамках проекта “Федеральный Интернет-экзамен в сфере профессионального образования” направление подготовки бакалавров по ООП “Прикладная информатика” успешно прошло независимую оценку качества образования, проводимого НИИ мониторинга качества образования. В этом же году распоряжением комиссии по наградам Европейского научно-промышленного консорциума за достижения в области фундаментальных и прикладных исследований, образовательных программ и учебно-методических изданий кафедра награждена Золотой медалью “Европейское качество” (Goldmedal “EuropeanQuality”).</div>
          </div>
        </li>

        </ul>
  </div>
  );
};

export default RoadmapNew;
