import { useMutation } from '@apollo/client';
import { subirImagen } from '@graphql/utils/mutations.gql';
import classnames from 'classnames';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Camera from 'react-html5-camera-photo';

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) u8arr[n] = bstr.charCodeAt(n);

  return new File([u8arr], `${filename}.${mime.split('/')[1]}`, { type: mime });
}

const TakePicture = ({ onSaveImage, name = 'default', table = 'default' }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [img, setImg] = useState(null);
  const [showImg, setShowImg] = useState(false);
  const [upload] = useMutation(subirImagen);

  const [uploading, setUploading] = useState(false);

  function handleTakePhoto(dataUri) {
    setImg(dataUri);
    setShowImg(true);
  }

  const onClickGuardar = () => {
    setUploading(true);
    const file = dataURLtoFile(img, name);

    const input = { file, name, table };

    upload({ variables: { input } })
      .then((res) => {
        onSaveImage(res?.data?.subirImagen?.imagen);
        setModalShow(false);
        setImg(null);
        setShowImg(false);
        setUploading(false);
      })
      .catch((err) => {
        setImg(null);
        setShowImg(false);
        setUploading(false);
        console.log(err);
      });
  };

  const onClickCerrar = () => {
    setModalShow(false);
    setImg(null);
    setShowImg(false);
  };

  const onClickIntentarOtraVez = () => {
    setImg(null);
    setShowImg(false);
  };

  return (
    <React.Fragment>
      <Button
        className="p-button-info"
        onClick={() => setModalShow(true)}
        icon="pi pi-camera"
        label="Tomar foto"
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
          <Modal.Title id="contained-modal-title-vcenter">Tomar foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showImg && (
            <Camera
              isImageMirror={false}
              isFullscreen
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
            />
          )}

          {showImg && (
            <div className="w-100 text-center">
              <img className="img-fluid w-100 my-2" src={img} />
              <span className="p-buttonset mt-2">
                <Button
                  label={classnames({
                    'Guardar imagen': !uploading,
                    'Subiendo imagen..': uploading,
                  })}
                  icon={classnames({
                    'pi pi-save': !uploading,
                    'pi pi-spin pi-spinner': uploading,
                  })}
                  className="p-button-sm"
                  onClick={onClickGuardar}
                  disabled={uploading}
                  type="button"
                />
                <Button
                  label="Intentar otra vez"
                  icon="pi pi-camera"
                  className="p-button-sm"
                  onClick={onClickIntentarOtraVez}
                  disabled={uploading}
                  type="button"
                />
              </span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={onClickCerrar}
            label={classnames({
              Cerrar: !uploading,
              'Subiendo imagen..': uploading,
            })}
            icon={classnames({
              'pi pi-times': !uploading,
              'pi pi-spin pi-spinner': uploading,
            })}
            disabled={uploading}
            type="button"
          />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default TakePicture;
