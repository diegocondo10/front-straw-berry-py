/*global test*/

import PrivateLayout from '@layouts/privateLayout';
import React from 'react';

const NotasPageContainer = () => {

  return (
    <PrivateLayout
      title="Notas"
      breadCrumb={{
        title: 'Notas',
        items: [
          {
            title: 'Notas',
            active: true,
          },
        ],
      }}
    >
      <main className="container-fluid">
        <div className="row justify-content-center">
          <h1>Test</h1>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default NotasPageContainer;
