/* eslint-disable prettier/prettier */
import React from 'react';

import About from '../../components/About';
import Analytics from '../../components/Analytics';
import Canvas from '../../components/Canvas';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';

const App = () => {
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
          <div className={`container mx-auto px-2 pt-4 pb-12 text-primary items-center justify-center`}>
            <h1
              className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
            >
              Войти
            </h1>
            <form name="form" className={`flex flex-col space-y-10 items-center justify-center`}>
              <div className={`w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500`}>
                  {/* <label htmlFor="username">Логин</label> */}
                  <input type="text" className={`w-full border-none bg-transparent outline-none focus:outline-none`} name="username" defaultValue='' placeholder='Введите логин' />
              </div>
              <div className={`w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500`}>
                  {/* <label htmlFor="password">Пароль</label> */}
                  <input type="password" className={`w-full border-none bg-transparent outline-none focus:outline-none`} name="password" defaultValue='' placeholder='Введите пароль' />
              </div>
              <div className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start`}>
                <div className="rounded-md shadow">
                  <button className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 hover:cursor-pointer`}>Войти</button>
                </div>
              </div>
            </form>
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
