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

      <style jsx global>{`
        .full_h {
          height: calc(100vh - 5rem) !important;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PrivateLayout;
