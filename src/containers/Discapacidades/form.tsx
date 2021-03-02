import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from 'src/components/Buttons/FooterButtonsForm';
import CustomTextArea from 'src/components/forms/CustomTextArea';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const DiscapacidadFormContainer = ({ onSubmit, items, title }) => {
  const { handleSubmit } = useFormContext();

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />
      <div className="row justify-content-center mt-5">
        <div className="col-11 col-md-8 col-lg-6 jumbotron">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextInput
              label="Nombre: "
              name="nombre"
              rules={{ required: 'Obligatorio' }}
            />

            <CustomTextArea label="Descripción: " name="descripcion" />

            <FooterButtonsForm hrefBack="/personas/discapacidades" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default DiscapacidadFormContainer;
