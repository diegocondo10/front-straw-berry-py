import { useCallback } from 'react';
import useAxios from './useAxios';
import useCustomToast from './useCustomToast';

const useReportes = () => {
  const { privateAxios } = useAxios();

  const { addInfoToast, addErrorToast } = useCustomToast();

  const getReporte = useCallback(async (reporte, body = {}) => {
    try {
      const { data, status } = await privateAxios.post(reporte, body, {
        responseType: 'blob',
      });

      if (status === 200) {
        const url = window.URL.createObjectURL(data);
        window.open(url);
        return addInfoToast('Se ha generado el reporte correctamente');
      }
    } catch (error) {
      console.log(error);
    }
    addErrorToast('Ha ocurrido un problema con la generación del reporte');
  }, []);

  return { getReporte };
};

export default useReportes;
