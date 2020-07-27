import PrivateNavbar from '@/components/navbar/privateNavbar';
import Head from 'next/head';
import React from 'react';

const PrivateLayout = ({ children, title = '' }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <PrivateNavbar />
      </header>

      {children}
    </React.Fragment>
  );
};

export default PrivateLayout;
