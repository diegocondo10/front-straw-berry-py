import React from 'react';

const Loading = ({
  children,
  loading = false,
  bgColor = '#f1f1f1',
  spinnerColor = '#9ee5f8',
  textColor = '#676767',
  logoSrc = '',
  text = 'Cargando...',
}) => {
  if (loading) {
    return (
      <div className="container-grid full_height align-items-center">
        <div className="text-center">
          <div className="loader" />
          <h1 className="display-4">{text}</h1>
        </div>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Loading;
