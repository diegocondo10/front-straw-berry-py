import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import PersonaQueries from '@graphql/Matriculas/queries.gql';

const DetailPersonaContainer = ({ items, id }) => {
  const history = useRouter();

  //const data = {};
  const { data, loading } = useQuery(PersonaQueries.getByIdPersona, { variables: { id } });

  const onClickEliminar = async () => {
    history.push('/personas');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Persona" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <h4 className="text-underline">Información Personal</h4>
            <ul className="w-100">
              <li>
                <strong>Identificación:</strong>
                {' ' + data?.persona?.identificacion}
              </li>
              <li>
                <strong>Tipo de Identificación:</strong>
                {' ' + data?.persona?.tipoIdentificacion}
              </li>
              <li>
                <strong>Primer Apellido:</strong>
                {' ' + data?.persona?.primerApellido}
              </li>
              <li>
                <strong>Segundo Apellido:</strong>
                {' ' + data?.persona?.segundoApellido}
              </li>
              <li>
                <strong>Primer Nombre:</strong>
                {' ' + data?.persona?.primerNombre}
              </li>
              <li>
                <strong>Segundo Nombre:</strong>
                {' ' + data?.persona?.segundoNombre}
              </li>
              <li>
                <strong>Género:</strong>
                {' ' + data?.persona?.genero}
              </li>
              <li>
                <strong>Sexo:</strong>
                {' ' + data?.persona?.sexo}
              </li>
              <li>
                <strong>Tipo de Sangre:</strong>
                {' ' + data?.persona?.tipoSangre}
              </li>
              <li>
                <strong>Fecha de Nacimiento:</strong>
                {' ' + data?.persona?.fechaNacimiento}
              </li>
              <li>
                <strong>Edad:</strong>
                {' ' + data?.persona?.edad}
              </li>
              <li>
                <strong>Calle Principal:</strong>
                {' ' + data?.persona?.callePrincipal}
              </li>
              <li>
                <strong>Calle Secundaria:</strong>
                {' ' + data?.persona?.calleSecundaria}
              </li>
              <li>
                <strong>Lugar de Referencia:</strong>
                {' ' + data?.persona?.lugarReferencia}
              </li>
              <li>
                <strong>Número de Casa:</strong>
                {' ' + data?.persona?.numeroCasa}
              </li>
            </ul>
            <h4 className="text-underline">Contactos</h4>
            <ul className="w-100">
              <li>
                <strong>Teléfono:</strong>
                {' ' + data?.persona?.telefono}
              </li>
              <li>
                <strong>Celular:</strong>
                {' ' + data?.persona?.celular}
              </li>
              <li>
                <strong>Correo:</strong>
                {' ' + data?.persona?.correo}
              </li>
            </ul>
            <ul className="w-100">
              <li>
                <strong>Ocupación:</strong>
                {' ' + data?.persona?.ocupacion}
              </li>
              <li>
                <strong>Nivel de Formación:</strong>
                {' ' + data?.persona?.nivelFormacion}
              </li>
            </ul>

            <h5 className="text-underline">Discapacidades</h5>

            <ul className="w-100">
              <li>
                <strong>Discapacidad:</strong>
                {' ' + data?.persona?.tieneDiscapacidad}
              </li>

              {data?.persona?.tieneDiscapacidad === 'SI' && (
                <React.Fragment>
                  <li>
                    <strong>Nivel de Discapacidad:</strong>
                    {' ' + data?.persona?.porcentajeDiscapacidad}
                  </li>
                  <li>
                    <strong>Carnet CONADIS:</strong>
                    {' ' + data?.persona?.carnetConadis}
                  </li>
                </React.Fragment>
              )}
            </ul>

            {data?.persona?.tieneDiscapacidad === 'SI' && (
              <React.Fragment>
                <Table className="w-75 mx-auto" hover striped bordered size="sm">
                  <thead className="thead-dark">
                    <tr>
                      <th>Nombre de Discapacidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.persona?.discapacidades?.map((e) => (
                      <tr className="bg-white" key={e.id}>
                        <td>{e.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </React.Fragment>
            )}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/personas" />
          </div>

          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailPersonaContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Personas', href: '/personas' },
      { title: query.id, href: `/personas/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default DetailPersonaContainer;
