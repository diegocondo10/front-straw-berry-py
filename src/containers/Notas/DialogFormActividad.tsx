import CustomDropDown from 'src/components/forms/CustomDropDown';
import CustomTextArea from 'src/components/forms/CustomTextArea';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import PreviewPicture from 'src/components/PreviewPicture';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';
import TakePicture from 'src/components/TakePicture';
import UploadFile from 'src/components/UploadFile';
import { setValueId } from 'src/utils/funciones';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Controller, FormProvider, useForm } from 'react-hook-form';

export type DialogFormActividadProps = {
  visible: boolean;
  setVisible: CallableFunction | any;
  accion: 'add' | 'upt';
  selectedItem: any;
  setSelectedItem: CallableFunction;
  onSubmit: CallableFunction;
  componentes: any[];
  isLoading: boolean;
};

const DialogFormActividad: React.FC<DialogFormActividadProps> = ({
  visible,
  setVisible,
  accion,
  selectedItem,
  setSelectedItem,
  onSubmit,
  componentes,
  isLoading,
}) => {
  const methods = useForm({ mode: 'onChange' });

  const [evidencias, setEvidencias] = useState([]);

  useEffect(() => {
    setEvidencias(selectedItem?.evidencias || []);
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
      size="xl"
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

            <Controller
              control={methods.control}
              name="evidenciasAdd"
              defaultValue={[]}
              rules={{
                setValueAs: (value: any[]) => {
                  return value?.map?.((item) => ({
                    ...item,
                    nota: selectedItem?.id,
                  }));
                },
              }}
              render={({ value: evidenciasAdd, onChange: setEvidenciasAdd }) => {
                console.log(evidenciasAdd?.concat(selectedItem?.evidencias));
                return (
                  <React.Fragment>
                    <FormAnexoFotografico
                      evidencias={evidenciasAdd}
                      setEvidencias={setEvidenciasAdd}
                    />

                    <Controller
                      control={methods.control}
                      name="evidenciasRemove"
                      defaultValue={[]}
                      rules={{
                        setValueAs: (value) => {
                          return value;
                        },
                      }}
                      render={({ value: evRemove, onChange: setEvRemove }) => (
                        <DataTable
                          value={evidenciasAdd
                            ?.concat(evidencias)
                            ?.filter((item) => !evRemove?.includes(item?.id))}
                        >
                          {IndexColumn()}
                          <Column
                            body={(rowData) => (
                              <a href={rowData?.url} target="_blank">
                                Ver imagen
                              </a>
                            )}
                          />
                          {OptionesColumn({
                            deleteButton: {
                              onClick: (rowData) => {
                                if (rowData.id) {
                                  evRemove.push(rowData.id);
                                  setEvRemove(evRemove);
                                } else {
                                  setEvidenciasAdd(
                                    evidenciasAdd?.filter(
                                      (item) => item.url !== rowData.url,
                                    ),
                                  );
                                }
                              },
                            },
                          })}
                        </DataTable>
                      )}
                    />
                  </React.Fragment>
                );
              }}
            />
          </form>
        </FormProvider>
      </Modal.Body>
      <Modal.Footer className="d-inline-flex justify-content-around">
        <Button
          label="Cerrar"
          className="p-button-danger"
          onClick={() => {
            methods.reset();
            setVisible();
          }}
          disabled={isLoading}
          style={{ width: '150px' }}
        />
        <Button
          label="Guardar"
          disabled={isLoading}
          onClick={methods.handleSubmit(onSubmit(accion))}
          style={{ width: '150px' }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default DialogFormActividad;

const FormAnexoFotografico = ({ evidencias, setEvidencias }) => {
  const [show, setShow] = useState(false);
  const methods = useForm({ mode: 'onChange' });
  const onHide = () => setShow(!show);
  const onSaveImage = (setter: CallableFunction) => ({ fullPath }): void =>
    setter(fullPath);

  const onSubmit = (data) => {
    evidencias.push(data);

    setEvidencias([...evidencias]);
    onHide();
  };
  return (
    <React.Fragment>
      <Button label="Agregar Anexo Fotografico" onClick={onHide} type="button" />
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar Anexo Fotografico
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProvider {...methods}>
            <form>
              <div className="form-group">
                <label htmlFor="">Foto:</label>
                <span className="d-flex flex-row justify-content-around w-100">
                  <Controller
                    control={methods.control}
                    name="url"
                    defaultValue={null}
                    render={({ value, onChange }) => (
                      <React.Fragment>
                        <UploadFile
                          onCompleteUpload={onSaveImage(onChange)}
                          table="evidencias"
                        />
                        <TakePicture
                          onSaveImage={onSaveImage(onChange)}
                          table="evidencias"
                        />
                        {value && (
                          <React.Fragment>
                            <PreviewPicture img={value} />
                            <Button
                              className="p-button-danger"
                              label="Borrar imagen"
                              icon="pi pi-times"
                              type="button"
                              onClick={() => onChange(null)}
                            />
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    )}
                  />
                </span>
              </div>
            </form>
          </FormProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={onHide}
            className="p-button-danger"
            label="Cerrar"
            type="button"
            style={{ width: '100px' }}
          />
          <Button
            className="ml-auto"
            type="button"
            onClick={methods.handleSubmit(onSubmit)}
            label="Guardar"
            style={{ width: '100px' }}
          />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
