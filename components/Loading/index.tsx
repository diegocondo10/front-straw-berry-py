import React, { useMemo } from 'react';

// bgColor = '#f1f1f1',
// spinnerColor = '#9ee5f8',
// textColor = '#676767',
// logoSrc = '',
const Loading = ({ children, loading = false, text = 'Cargando...' }) => {
  const component = useMemo(() => {
    if (loading) {
      return (
        <div className="container-grid h-100 align-items-center animated fadeIn">
          <div className="text-center">
            <div className="loader" />
            <h1 className="display-4">{text}</h1>
          </div>
        </div>
      );
    }

    return children;
  }, [loading]);

  return component;
};

export default Loading;
