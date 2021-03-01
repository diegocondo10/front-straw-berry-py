import { useMutation } from '@apollo/client';
import Usuario from '@graphql/Auth/queries.gql';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import React from 'react';
import { Card, Form, Image, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useCustomToast from 'src/hooks/useCustomToast';
import PublicLayout from 'src/layouts/publicLayout';
import useUsuario from 'src/_redux/hooks/useUsuario';

const LoginContainer = () => {
  const { register, errors, handleSubmit } = useForm({ mode: 'onChange' });
  const [login, { loading }] = useMutation(Usuario.login);

  const { addWarningToast } = useCustomToast();

  const { setState } = useUsuario();

  const router = useRouter();

  const onSubmit = async (input) => {
    const { data } = await login({
      variables: {
        ...input,
      },
    });

    const { success, ...rest } = data.tokenAuth;
    if (!success) {
      return addWarningToast('POR FAVOR VERIFIQUE SUS CREDENCIALES');
    }
    setState(rest);

    router.push('/');
  };

  return (
    <PublicLayout>
      <main className="container-fluid text-center vh-100">
        <div className="row justify-content-center h-100">
          <div className="col-sm-10 col-lg-6  align-self-center">
            <Card className="border border-primary">
              <Card.Header className="bg-primary">
                <h3 className="font-weight-bold text-white my-2">
                  Instituto de Parálisis Cerebral del Azuay
                </h3>
              </Card.Header>
              <Card.Body className="text-center">
                <Image src="/img/logo1.jfif" fluid />

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Username:</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          <i className="pi pi-user" />
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
                          <i className="pi pi-lock" />
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

                  <Button
                    label="Iniciar Sesión"
                    className="p-button-outlined p-button-info"
                    type="submit"
                    disabled={loading}
                  />
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
