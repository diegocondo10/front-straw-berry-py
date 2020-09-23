import React from "react";
import { BtnRegresar } from "./BtnRegresar";
import LoadingButton from "./LoadingButton";

const FooterButtonsForm = ({
  hrefBack,
  loading,
  loadingText = "Procesando...",
  label = "Guardar",
}) => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-5 my-1'>
        <BtnRegresar variant='outline-danger' href={hrefBack} />
      </div>
      <div className='col-md-5 my-1'>
        <LoadingButton
          type='submit'
          label={label}
          loading={loading}
          loadingText={loadingText}
        />
      </div>
    </div>
  );
};

export default FooterButtonsForm;
