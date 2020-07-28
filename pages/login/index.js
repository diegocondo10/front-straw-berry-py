import PublicLayout from '@/layouts/publicLayout';
import React from 'react';
import { Card, Form, Image, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const LoginContainer = () => {
  const { register, errors } = useForm();

  return (
    <PublicLayout>
      <main className="container-fluid">
        <Card>
          <Card.Header>
            <Card.Title>IPCA</Card.Title>
            <Card.Body>
              <Image
                className="bg-danger"
                src="/img/logo1.jpg"
                fluid
                style={{ width: '150px' }}
              />
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

              <Form.Group>
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
                    placeholder="Contraseña"
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password && errors.password.message}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <button className="btn btn-info"> Iniciar Sesión</button>
            </Card.Body>
          </Card.Header>
        </Card>
      </main>
    </PublicLayout>
  );
};

export default LoginContainer;
