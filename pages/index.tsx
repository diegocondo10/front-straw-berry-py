import PrivateLayout from '@layouts/privateLayout';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage<any> = () => {
  return (
    <PrivateLayout title="Inicio">
      <main>
        <h1>Test</h1>
      </main>
    </PrivateLayout>
  );
};
export default Home;
