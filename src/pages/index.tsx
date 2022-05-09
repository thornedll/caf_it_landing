/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import TimeMe from "timeme.js";

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

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
  const [shouldSendEvent, setShouldSendEvent] = useState(false);
  useEffect(() => {
    TimeMe.initialize({
      currentPageName: "my-home-page", // current page
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
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <Tracker shouldSendEvent={shouldSendEvent} />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
