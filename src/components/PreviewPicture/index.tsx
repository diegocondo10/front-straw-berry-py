import { Button } from 'primereact/button';
import React from 'react';
import { Modal } from 'react-bootstrap';

const PreviewPicture = ({ img }: any) => {
  const [modalShow, setModalShow] = React.useState(false);

  const onClickCerrar = () => {
    setModalShow(false);
  };

  return (
    <React.Fragment>
      <Button
        className="p-button-warning rounded-0"
        onClick={() => setModalShow(true)}
        icon="pi pi-eye"
        label="Ver imagen"
        type="button"
      />

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={onClickCerrar}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Visor de imagenes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} className="w-100 img-fluid img-thumbnail" alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClickCerrar} label="Cerrar" icon="pi pi-times" type="button" />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default PreviewPicture;
