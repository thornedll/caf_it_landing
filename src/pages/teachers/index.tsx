import React from 'react';

import About from '../../components/About';
import Analytics from '../../components/Analytics';
import Canvas from '../../components/Canvas';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';
import TeachersCards from '../../components/TeachersCards';
// import WorkFlow from '../../components/Workflow';
// import RoadMap from '../../components/RoadMap';

const App = () => {
  const config = "Профессорско-преподавательский состав";

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
          <div className={`container max-w-5xl mx-auto m-1`}>
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
          {/* <RoadMap /> */}
          {/* <WorkFlow /> */}
          <TeachersCards />
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
