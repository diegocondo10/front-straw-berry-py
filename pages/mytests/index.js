import PublicLayout from '@layouts/publicLayout';

import React, { useState } from 'react';

const TestsContainer = () => {
  const [content, setContent] = useState('');

  return (
    <PublicLayout>
      <main className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Test</h1>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};

export default TestsContainer;
