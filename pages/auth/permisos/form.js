import BreadCrumbTitle from '@components/BreadCrumb/BreadCumbTitle';
import { BtnRegresar } from '@components/Buttons';
import Select from '@components/forms/inputs';
import PrivateLayout from '@layouts/privateLayout';
import { Aplicacion, Permiso } from '@services/auth.service';
import { ErrorMessage } from '@hookform/error-message';
import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

const PermisoFormContainer = ({ title, items, isEdit, id }) => {
  const methods = useForm();
  const { register, handleSubmit, errors, reset } = methods;
  const [aplicaciones, setAplicaciones] = useState([]);
  const [loading, setloading] = useState(false);
  const history = useRouter();

  useEffect(() => {
    setloading(true);

    const promises = [Aplicacion.getAll()];

    if (id) {
      promises.push(Permiso.getById(id));
    }

    Axios.all(promises).then(([resApps, res2]) => {
      setAplicaciones(resApps.data.map((e) => ({ label: e.nombre, value: e.id })));
      if (res2) {
        reset({
          ...res2.data,
          aplicacionId: res2.data.aplicacion.id,
        });
      }

      setloading(false);
    });
  }, []);

  const onSubmit = async (data) => {
    setloading(true);
    if (isEdit) {
      await Permiso.update(id, data);
    } else {
      await Permiso.create(data);
    }
    history.push('/auth/permisos');
    setloading(false);
  };

  return (
    <PrivateLayout title="IPCA | Formulario" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title={title} items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 jumbotron rounded">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Nombre:</Form.Label>

                  <Form.Control
                    name="nombre"
                    isInvalid={!!errors.nombre}
                    ref={register({ required: 'Este campo es obligatorio' })}
                  />
                  <Form.Control.Feedback type="invalid">
                    <ErrorMessage errors={errors} name="nombre">
                      {({ message }) => message}
                    </ErrorMessage>
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Select
                    name="aplicacionId"
                    options={aplicaciones}
                    label="Aplicacion:"
                    rules={{ required: 'Este campo es obligatorio' }}
                    //defaultValue={aplicaciones[0].id}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descripcion:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="descripcion"
                    isInvalid={!!errors.descripcion}
                    ref={register}
                  />
                </Form.Group>

                <Form.Row className=" justify-content-between">
                  <div className="col-md-5 mt-3 my-1">
                    <BtnRegresar href="/auth/permisos" variant="outline-danger" />
                  </div>
                  <div className="col-md-5 mt-3 my-1">
                    <Button variant="outline-primary" block type="submit">
                      Guardar
                    </Button>
                  </div>
                </Form.Row>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const items = [{ title: 'Permisos', href: '/auth/permisos' }];
  let title = 'Agregar Permiso';
  let isEdit = false;
  if (query.id) {
    isEdit = true;
    title = 'Editar Permiso';
    items.push({ title: 'Editar Permiso', active: true });
  } else {
    items.push({ title: 'Agregar Permiso', active: true });
  }

  return {
    props: {
      items,
      title,
      isEdit,
      id: query.id || null,
    },
  };
};

export default PermisoFormContainer;
