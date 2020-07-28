import BreadCrumb from '@/components/BreadCrumb';
import { BtnRegresar } from '@/components/Buttons';
import PrivateLayout from '@/layouts/privateLayout';
import { Aplicacion } from '@/services/auth.service';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AplicacionContainer = ({ breadCrumbItems, isEdit, aplicacion = {}, id }) => {
  const history = useRouter();

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      ...aplicacion,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    if (isEdit) {
      await Aplicacion.update(id, data);
    } else {
      await Aplicacion.create(data);
    }

    history.push('/auth/aplicaciones');
  };

  return (
    <PrivateLayout>
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center my-3 display-4">Aplicación</h1>
          </div>

          <div className="col-md-8">
            <BreadCrumb items={breadCrumbItems} />
          </div>

          <div className="col-11 col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  name="nombre"
                  ref={register({ required: 'Este campo es obligatorio' })}
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  <ErrorMessage errors={errors} name="nombre">
                    {({ message }) => message}
                  </ErrorMessage>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                  name="descripcion"
                  ref={register}
                  rows="4"
                  as="textarea"
                />
              </Form.Group>

              <Form.Row className="justify-content-around">
                <div className="col-md-5 my-1">
                  <BtnRegresar variant="outline-danger" href="/auth/aplicaciones" />
                </div>
                <div className="col-md-5 my-1">
                  <Button block type="submit" variant="outline-primary">
                    Guardar
                  </Button>
                </div>
              </Form.Row>
            </form>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AplicacionContainer.getInitialProps = async ({ query }) => {
  let isEdit = false;
  let data = null;
  const breadCrumbItems = [
    {
      title: 'Aplicaciones',
      href: '/auth/aplicaciones',
    },
  ];

  if (query._id) {
    isEdit = true;
    breadCrumbItems.push({
      title: 'Editar Aplicación',
      active: true,
    });

    const res = await Aplicacion.getById(query._id);
    data = res.data;
  } else {
    breadCrumbItems.push({
      title: 'Agregar Aplicación',
      active: true,
    });
  }

  return {
    breadCrumbItems,
    isEdit,
    aplicacion: data,
    id: query._id,
  };
};

export default AplicacionContainer;
