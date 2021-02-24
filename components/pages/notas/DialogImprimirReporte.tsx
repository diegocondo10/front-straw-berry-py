import CustomDropDown from '@components/forms/CustomDropDown';
import CustomTextArea from '@components/forms/CustomTextArea';
import useB4BreakPoints from '@hooks/useB4BreakPoints';
import useReportes from '@hooks/useReportes';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const DialogImprimirReporte = ({ show, setShow, docentes, selectedAlumno }) => {
  const methods = useForm({ mode: 'onChange' });

  const { getReporte } = useReportes();

  const onClickImprimir = async (data) => {
    await getReporte(`reporte-notas`, {
      idMatricula: selectedAlumno.id,
      ...data,
    });
    setShow(false);
  };

  const footer = useMemo(
    () => (
      <div className="d-inline-flex justify-content-center w-100">
        <Button
          label="Cancelar"
          className="p-button-danger"
          onClick={() => setShow(false)}
          style={{ width: '200px' }}
        />
        <Button
          label="Imprimir"
          onClick={methods.handleSubmit(onClickImprimir)}
          style={{ width: '200px' }}
        />
      </div>
    ),
    [selectedAlumno],
  );

  return (
    <React.Fragment>
      <Dialog
        header="Por favor ingrese la siguiente información para imprimir el reporte"
        visible={show}
        style={{ width: '80vw', heigth: '40vh' }}
        footer={footer}
        onHide={() => setShow?.(false)}
      >
        <FormProvider {...methods}>
          <form>
            <CustomDropDown
              label="Docente"
              name="idDocente"
              options={docentes}
              rules={{
                setValueAs: (value) => value?.id || value,
                required: 'Campo obligatorio',
              }}
              optionLabel="personaStr"
            />
            <CustomTextArea
              label="Área de trabajo"
              name="areaTrabajo"
              rules={{ required: 'Campo obligatorio' }}
            />
            <CustomTextArea
              label="Responsable"
              name="responsable"
              rules={{ required: 'Campo obligatorio' }}
            />
          </form>
        </FormProvider>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogImprimirReporte;
