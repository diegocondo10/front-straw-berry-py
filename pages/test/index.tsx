import PublicLayout from 'src/layouts/publicLayout';
import React, { useEffect, useMemo } from 'react';

const TestPage = () => {
  const stringFunction = useMemo(() => {
    return `console.log('HOLA MUNDO')`;
  }, []);

  useEffect(() => {
    eval(stringFunction);
  }, []);

  return (
    <PublicLayout>
      <main>
        <h1>Esta es una prueba</h1>
      </main>
    </PublicLayout>
  );
};

export default TestPage;
