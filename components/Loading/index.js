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
    return text;
  }

  return <div>{children}</div>;
};

export default Loading;
