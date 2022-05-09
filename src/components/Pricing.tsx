/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-5/12 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4 p-6`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature.split(':').map((firstPart, index) => (
                      <span
                        key={index}
                        className={index % 2 ? 'text-primary' : 'text-border'}
                      >
                        {firstPart}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                <span className={`text-base`}> {firstPlan?.priceDetails} </span>
                {firstPlan?.price}
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-5/12 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4 p-6`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature.split(':').map((firstPart, index) => (
                      <span
                        key={index}
                        className={index % 2 ? 'text-primary' : 'text-border'}
                      >
                        {firstPart}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                <span className={`text-base`}> {thirdPlan?.priceDetails} </span>
                {thirdPlan?.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

// for JSON
// "features": [
//   {
//     "feature1": "Набор на бюджет:",
//     "feature2": "28 мест"
//   },
//   {
//     "feature1": "Приём на платной основе:",
//     "feature2": "10 мест"
//   },
//   {
//     "feature1": "Стоимость обучения в 2021 году:",
//     "feature2": "113 776 руб./год"
//   },
//   {
//     "feature1": "Вступительные испытания и минимальные баллы:",
//     "feature2": "профильная математика (39), русский язык (40) и один предмет на выбор: физика (39), информатика и ИКТ (44)"
//   },
//   {
//     "feature1": "Баллы последних зачисленных на бюджет (проходной балл):",
//     "feature2": "в 2021 году – 240 баллов;"
//   }
// ]
