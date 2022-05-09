/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import TimeMe from "timeme.js";

import About from '../../components/About';
import Analytics from '../../components/Analytics';
import Canvas from '../../components/Canvas';
import Header from '../../components/Header';
import LazyShow from '../../components/LazyShow';
import TeachersCards from '../../components/TeachersCards';
// import WorkFlow from '../../components/Workflow';
// import RoadMap from '../../components/RoadMap';

function Tracker({ shouldSendEvent }) {
  const tid = '1x';
  const t = new Date().getTime();

  const search = new URLSearchParams();
  search.set('t', t);
  search.set("tid", tid);
  search.set("category", "Resume");
  search.set("name", "visit");
  search.set("value", TimeMe.getTimeOnCurrentPageInSeconds());
  const q = search.toString();

  if (shouldSendEvent) {
    console.log(`event sent: ${q}`);
  }

  return true;
}

const App = () => {
  const config = "Профессорско-преподавательский состав";
  const [shouldSendEvent, setShouldSendEvent] = useState(false);
  useEffect(() => {
    TimeMe.initialize({
      currentPageName: "teachers", // current page
      idleTimeoutInSeconds: 15 // seconds
    });
  }, []);

  useEffect(() => {
    TimeMe.callWhenUserLeaves(() => {
      setShouldSendEvent(true);
    });

    TimeMe.callWhenUserReturns(() => {
      setShouldSendEvent(false);
    });
  }, []);

  return (
    <div className={`bg-background grid overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-5 bg-background sm:pb-16 md:pb-5 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5`}
          >
            <Header />
            <Tracker shouldSendEvent={shouldSendEvent} />
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
