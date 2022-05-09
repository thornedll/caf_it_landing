/* eslint-disable prettier/prettier */
import React from 'react';

import Link from 'next/link';

import config from '../config/index.json';

const Refs = () => {
  const { navigation2 } = config;

  return (
    <span className="md:ml-10 md:pr-4 md:space-x-8">
      {navigation2.map((item) => (
        <span key={item.name}>
          <Link href={item.href}>
            <a className="font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer">
              {item.name}
            </a>
          </Link>
        </span>
      ))}
    </span>
  );
};

export default Refs;
