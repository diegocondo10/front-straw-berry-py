import React from 'react';
import HrefButton from './HrefButton';
import LoadingButton from './LoadingButton';

const FooterButtonsForm = ({
  hrefBack,
  loading = false,
  loadingText = 'Procesando...',
  label = 'Guardar',
  disabledRegresar = false,
  disabledSubmit = false,
}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 my-1">
        <HrefButton
          label="Regresar"
          href={hrefBack}
          className="btn-block p-button-danger"
          type="button"
          disabled={disabledRegresar}
        />
      </div>
      <div className="col-md-5 my-1">
        <LoadingButton
          type="submit"
          label={label}
          loading={loading}
          loadingText={loadingText}
          disabled={disabledSubmit}
        />
      </div>
    </div>
  );
};

export default FooterButtonsForm;
