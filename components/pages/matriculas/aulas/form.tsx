import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropdown from '@components/forms/CustomDropdown';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const AulasFormContainer = ({
  title,
  loading,
  items,
  onSubmit,
  periodos,
}: {
  title: string;
  items: any[];
  periodos: any[];
  loading: boolean;
  onSubmit: CallableFunction;
}) => {
  const methods = useForm({ mode: 'onChange' });

  const localOnSubmit = async (input) => {
    await onSubmit(input);
  };

  return (
    <FormProvider {...methods}>
      <main className="container-fluid">
        <TitleBreadCrumb title={title} items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 jumbotron">
            <form onSubmit={methods.handleSubmit(localOnSubmit)}>
              <CustomDropdown
                label="Seleccione el periodo lectivo:"
                name="periodo"
                options={periodos}
              />

              <FooterButtonsForm hrefBack="/matriculas/aulas" loading={loading} />
            </form>
          </div>
        </div>
      </main>
    </FormProvider>
  );
};

export default AulasFormContainer;
