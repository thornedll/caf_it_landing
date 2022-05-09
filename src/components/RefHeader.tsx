/* eslint-disable prettier/prettier */
import React from 'react';

import Link from 'next/link';

import config from '../config/index.json';

const RefHeader = () => {
  const { company } = config;

  return (
    <Link href={company.href}>
      <a>
        <span className="sr-only">{company.name}</span>
        <img alt="logo" className="h-16 w-auto sm:h-16" src={company.logo} />
      </a>
    </Link>
  );
};

export default RefHeader;
