import { useMutation } from '@apollo/client';
import { subirImagen } from '@graphql/utils/mutations.gql';
import { FileUpload } from 'primereact/fileupload';
import React, { useRef } from 'react';

const UploadFile = ({ name = 'default', table = 'default', onCompleteUpload }) => {
  const [upload] = useMutation(subirImagen);

  const uploadRef = useRef<FileUpload>(null);

  const uploadHandler = (e: { files: File[] }) => {
    const input = { file: e.files[0], name, table };

    upload({ variables: { input } })
      .then((res) => {
        onCompleteUpload(res?.data?.subirImagen?.imagen);
        uploadRef.current.clear();
      })
      .catch((err) => {
        uploadRef.current.clear();
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <FileUpload
        mode="basic"
        name="demo[]"
        accept="image/*"
        //maxFileSize={1000000}
        cancelLabel="Cancelar"
        multiple={false}
        chooseLabel="Buscar imagen"
        uploadHandler={uploadHandler}
        customUpload
        ref={uploadRef}
      />
    </React.Fragment>
  );
};

export default UploadFile;
