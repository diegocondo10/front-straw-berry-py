import React from 'react';
import PrivateLayout from '@/layouts/privateLayout';

const Dashboard = () => {
  return (
    <PrivateLayout loading={false} loadingText="BUSCANDO PRODUCTOS...">
      <main className="container-fluid"></main>
    </PrivateLayout>
  );
};

export default Dashboard;
