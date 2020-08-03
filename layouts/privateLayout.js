import PrivateNavbar from '@components/navbar/privateNavbar';
import Head from 'next/head';
import React from 'react';
import Loading from '@components/Loading';

const PrivateLayout = ({ children, title = '', loading, loadingText }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Loading loading={loading} text={loadingText}>
        <header>
          <PrivateNavbar />
        </header>

        {!loading && children}
      </Loading>

      <style jsx global>{`
        .full_h {
          height: calc(100vh - 5rem) !important;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PrivateLayout;
