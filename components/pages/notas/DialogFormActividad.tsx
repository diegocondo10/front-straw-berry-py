import CustomDropDown from '@components/forms/CustomDropDown';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import { setValueId } from '@utils/funciones';
import { Button } from 'primereact/button';
import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

export type DialogFormActividadProps = {
  visible: boolean;
  setVisible: CallableFunction | any;
  accion: 'add' | 'upt';
  selectedItem: any;
  setSelectedItem: CallableFunction;
  onSubmit: CallableFunction;
  componentes: any[];
};

const DialogFormActividad: React.FC<DialogFormActividadProps> = ({
  visible,
  setVisible,
  accion,
  selectedItem,
  setSelectedItem,
  onSubmit,
  componentes,
}) => {
  const methods = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (accion === 'upt') {
      methods.reset(selectedItem);
    } else {
      methods.reset({});
    }
  }, [selectedItem, visible, accion, setSelectedItem, onSubmit]);

  return (
    <Modal
      show={visible}
      onHide={setVisible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {accion === 'add' && 'Agregar Actividad'}
          {accion === 'upt' && 'Editar Actividad'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormProvider {...methods}>
          <form>
            <CustomDropDown
              name="componente"
              label="Componente"
              options={componentes}
              optionLabel="nombre"
              filter
              rules={{
                required: 'Obligatorio',
                setValueAs: setValueId,
              }}
            />
            <CustomTextInput
              name="titulo"
              label="Titulo"
              rules={{
                required: 'Obligatorio',
              }}
            />
            <CustomTextInput
              name="resultado"
              label="Resultado"
              rules={{
                required: 'Obligatorio',
              }}
            />
            <CustomTextArea name="observaciones" label="Observaciones" />
          </form>
        </FormProvider>
      </Modal.Body>
      <Modal.Footer>
        <Button
          label="Cerrar"
          onClick={() => {
            methods.reset();
            setVisible();
          }}
        />
        <Button label="Guardar" onClick={methods.handleSubmit(onSubmit(accion))} />
      </Modal.Footer>
    </Modal>
  );
};

export default DialogFormActividad;
