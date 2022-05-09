/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable new-cap */
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Line } from 'react-chartjs-2';

import About from '../../components/About';
import Analytics from '../../components/Analytics';
import Canvas from '../../components/Canvas';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const App = () => {
  const config = "Административная панель";

  const downloadPDF = () => {
    html2canvas(document.getElementById("target")!).then((canvas) => {
      const dataURI = canvas.toDataURL();
      const docDefinition = {
        pageSize: "A4",
        pageOrientation: "landscape",
        pageMargins: [0, 0, 0, 0],
        background: {
          image: dataURI,
          width: 845
        },
        // content: [
        //   {
        //     text: "Количество посещений уникальных пользователей по страницам",
        //     fontSize: 32,
        //     bold: true,
        //     margin: [50, 50, 60, 60]
        //   }
        // ]
      };
      pdfMake.createPdf(docDefinition).download("Статистика.pdf");
    });
  };

  const downloadPDF2 = () => {
    html2canvas(document.getElementById("target2")!).then((canvas) => {
      const dataURI = canvas.toDataURL();
      const docDefinition = {
        pageSize: "A4",
        pageOrientation: "landscape",
        pageMargins: [0, 0, 0, 0],
        background: {
          image: dataURI,
          width: 845
        },
        // content: [
        //   {
        //     text: "Количество посещений уникальных пользователей по страницам",
        //     fontSize: 32,
        //     bold: true,
        //     margin: [50, 50, 60, 60]
        //   }
        // ]
      };
      pdfMake.createPdf(docDefinition).download("Посещения.pdf");
    });
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Количество посещений уникальных пользователей по страницам',
      },
    },
  };

  const labels = ['01.05.2022', '02.05.2022', '03.05.2022', '04.05.2022', '05.05.2022', '06.05.2022', '07.05.2022'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Главная страница',
        data: [4, 5, 1, 3, 5, 5, 6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Преподаватели',
        data: [1, 2, 3, 3, 2, 1, 2],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'История',
        data: [2, 3, 4, 1, 1, 1, 3],
        borderColor: 'rgb(255, 136, 0)',
        backgroundColor: 'rgba(255, 136, 0, 0.5)',
      },
    ],
  };

  return (
    <div className={`bg-background grid overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-5 bg-background sm:pb-16 md:pb-5 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5`}
          >
            <Header />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <div className={`container mx-auto px-2 pt-4 pb-4 text-primary items-center justify-center`}>
          <h1
              className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
            >
              {config.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index % 2 ? 'text-primary' : 'text-border'}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>
          <div className={`pt-6 px-4 pb-4`}>
            <div className={`w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4`}>
              <div id='target' className={`bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2`}>
                <div id='target'>
                  <Line options={options} data={data} />
                </div>
                <div className={`container mx-auto items-center justify-center text-center`}>
                  <button
                    onClick={downloadPDF}
                    className={`text-2xl font-bold leading-tight text-center shadow rounded-lg p-2 mt-3`}
                  >
                    Скачать PDF
                  </button>
                </div>
              </div>
              <div className={`bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8`}>
                     <div className={`mb-4 flex items-center justify-between`}>
                        <div>
                           <h3 className={`text-xl font-bold text-gray-900 mb-2`}>Посещения</h3>
                           <span className={`text-base font-normal text-gray-500`}>Список недавних посещений</span>
                        </div>
                        <div className={`flex-shrink-0`}>
                           <a href="#" className={`text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2`}>Посмотреть все</a>
                        </div>
                     </div>
                     <div className={`flex flex-col mt-8`}>
                        <div className={`overflow-x-auto rounded-lg`}>
                           <div id='target2' className={`align-middle inline-block min-w-full`}>
                              <div className={`shadow overflow-hidden sm:rounded-lg`}>
                                 <table className={`min-w-full divide-y divide-gray-200`}>
                                    <thead className={`bg-gray-50`}>
                                       <tr>
                                          <th scope="col" className={`p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                                             Страница и пользователь
                                          </th>
                                          <th scope="col" className={`p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                                             Дата и время
                                          </th>
                                          <th scope="col" className={`p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}>
                                             Как долго
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody className={`bg-white`}>
                                       <tr>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            Главная страница <span className={`font-semibold`}>Администратор</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 19:08
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             11 сек
                                          </td>
                                       </tr>
                                       <tr className={`bg-gray-50`}>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            История <span className={`font-semibold`}>Администратор</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 19:06
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             34 сек
                                          </td>
                                       </tr>
                                       <tr>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            Преподаватели <span className={`font-semibold`}>Администратор</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 19:05
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             5 сек
                                          </td>
                                       </tr>
                                       <tr className={`bg-gray-50`}>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            Преподаватели <span className={`font-semibold`}>Неавт. пользователь</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 18:52
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             27 сек
                                          </td>
                                       </tr>
                                       <tr>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            История <span className={`font-semibold`}>Неавт. пользователь</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 18:50
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             51 сек
                                          </td>
                                       </tr>
                                       <tr className={`bg-gray-50`}>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            Главная страница <span className={`font-semibold`}>Неавт. пользователь</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 18:49
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             8 сек
                                          </td>
                                       </tr>
                                       <tr>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            Главная страница <span className={`font-semibold`}>Администратор</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 18:47
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             18 сек
                                          </td>
                                       </tr>
                                       <tr className={`bg-gray-50`}>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                            Главная страница <span className={`font-semibold`}>Неавт. пользователь</span>
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-normal text-gray-500`}>
                                            07.05.2022, 18:39
                                          </td>
                                          <td className={`p-4 whitespace-nowrap text-sm font-semibold text-gray-900`}>
                                             23 сек
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                      </div>
                    </div>
                  </div>
                  <div className={`container mx-auto items-center justify-center text-center`}>
                    <button
                      onClick={downloadPDF2}
                      className={`text-2xl font-bold leading-tight text-center shadow rounded-lg p-2 mt-3`}
                    >
                      Скачать PDF
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
