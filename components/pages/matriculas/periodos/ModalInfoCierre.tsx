import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalInfoCierre = ({ matriculas }) => {
  const [modalShow, setModalShow] = useState(false);

  const onHide = () => {
    setModalShow(!modalShow);
  };

  return (
    <React.Fragment>
      <Button style={{ width: '135px' }} onClick={onHide}>
        Cerrar Periódo
      </Button>
      <Modal
        show={modalShow}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Esta </h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalInfoCierre;
