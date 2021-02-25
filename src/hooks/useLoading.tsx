import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>('Cargando');

  return { loading, setLoading, loadingText, setLoadingText };
};

export default useLoading;
