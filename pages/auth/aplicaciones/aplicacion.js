import BreadCrumb from '@/components/BreadCrumb';
import { BtnRegresar } from '@/components/Buttons';
import PrivateLayout from '@/layouts/privateLayout';
import { Aplicacion } from '@/services/auth.service';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import BreadCrumbTitle from '@/components/BreadCrumb/BreadCumbTitle';

const AplicacionContainer = ({ items, title, isEdit, aplicacion = {}, id }) => {
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      ...aplicacion,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    if (isEdit) {
      await Aplicacion.update(id, data);
    } else {
      await Aplicacion.create(data);
    }

    setLoading(false);
    history.push('/auth/aplicaciones');
  };

  return (
    <PrivateLayout loading={loading} loadingText="Guardando cambios...">
      <main className="container-fluid">
        <BreadCrumbTitle title={title} items={items} />
        <div className="row justify-content-center mt-5">
          <div className="col-11 col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card">
                <div className="card-body">
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
                </div>
                <div className="card-footer">
                  <Form.Row className="justify-content-around">
                    <div className="col-md-5 my-1">
                      <BtnRegresar
                        variant="outline-danger"
                        href="/auth/aplicaciones"
                      />
                    </div>
                    <div className="col-md-5 my-1">
                      <Button block type="submit" variant="outline-primary">
                        Guardar
                      </Button>
                    </div>
                  </Form.Row>
                </div>
              </div>
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
  let title = 'Agregar Aplicación';

  const breadCrumbItems = [
    {
      title: 'Aplicaciones',
      href: '/auth/aplicaciones',
    },
  ];

  if (query._id) {
    isEdit = true;
    title = 'Editar Aplicación';
    breadCrumbItems.push({ title, active: true });
    const res = await Aplicacion.getById(query._id);
    data = res.data;
  } else {
    breadCrumbItems.push({ title, active: true });
  }

  return {
    items: breadCrumbItems,
    isEdit,
    aplicacion: data,
    id: query._id,
    title,
  };
};

export default AplicacionContainer;
