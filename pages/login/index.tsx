import { useMutation } from '@apollo/client';
import useCustomToast from 'src/hooks/useCustomToast';
import PublicLayout from 'src/layouts/publicLayout';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Card, Form, Image, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Cotizacion = {
  valoresPagar: {
    total: 10,
  },

  producto: {
    nombre: 'AIG',
    categoria: {
      nombre: 'Vehiculos',
      id: 1,
    },
  },
};

const LoginContainer = () => {
  const { register, errors, handleSubmit } = useForm({ mode: 'onChange' });
  const [login] = useMutation(Usuario.login);
  const { addWarningToast } = useCustomToast();
  const router = useRouter();

  useEffect(() => {
    const usuario = Usuario.getStorageData();

    if (usuario) {
      router.push('/');
    }
  }, []);

  const onSubmit = async (input) => {
    const { data } = await login({
      variables: {
        ...input,
      },
    });
    const { success, ...rest } = data.tokenAuth;
    if (!success) {
      addWarningToast('POR FAVOR VERIFIQUE SUS CREDENCIALES');
      return;
    }
    Usuario.storageData(rest);
    router.push('/');
  };

  return (
    <PublicLayout>
      <main className="container-fluid text-center mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 ">
            <Card>
              <Card.Header>
                <Card.Title>Instituto de Parálisis Cerebral del Azuay </Card.Title>
              </Card.Header>
              <Card.Body className="text-center">
                <Image className="bg-danger" src="/img/logo1.jpg" fluid />

                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Username:</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          {' '}
                          <i className="fas fa-user" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="username"
                        ref={register({
                          required: 'Este campo es obligatorio',
                        })}
                        type="text"
                        placeholder="Username"
                        isInvalid={errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username && errors.username.message}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="my-5">
                    <Form.Label>Contraseña:</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <i className="fas fa-lock" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>

                      <Form.Control
                        name="password"
                        ref={register({
                          required: 'Este campo es obligatorio',
                        })}
                        type="password"
                        autoComplete="on"
                        placeholder="Contraseña"
                        isInvalid={errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password && errors.password.message}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <button className="btn btn-info" type="submit">
                    Iniciar Sesión
                  </button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};

export default LoginContainer;
