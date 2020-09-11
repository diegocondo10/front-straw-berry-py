import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Persona } from '@services/personas.service';
import { Table } from 'react-bootstrap';

const DetailPersonaContainer = ({ items, id }) => {
  const history = useRouter();

  //const data = {};
  const { data, loading } = useQuery(Persona.getById, { varaibles: { id } });

  const onClickEliminar = async () => {
    history.push('/personas');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Persona" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <ul>
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
              <li>
                <strong>Discapacidad:</strong>
                {' ' + data?.persona?.discapacidad}
              </li>
              <li>
                <strong>Nivel de Discapacidad:</strong>
                {' ' + data?.persona?.nivelDiscapacidad}
              </li>
              <li>
                <strong>Carnet CONADIS:</strong>
                {' ' + data?.persona?.conadis}
              </li>
              <li>
                <strong>Ocupación:</strong>
                {' ' + data?.persona?.ocupacion}
              </li>
              <li>
                <strong>Nivel de Formación:</strong>
                {' ' + data?.persona?.nivelFormacion}
              </li>
            </ul>
            <Table hover striped bordered size="sm">
              <thead className="thead-dark">
                <tr>
                  <th>Identificación</th>
                  <th>Tipo de Identificación</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Género</th>
                  <th>Sexo</th>
                  <th>Tipo de Sangre</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Edad</th>
                  <th>Calle Principal</th>
                  <th>Calle Secundaria</th>
                  <th>Lugar de Referencia</th>
                  <th>Número de Casa</th>
                  <th>Teléfono</th>
                  <th>Celular</th>
                  <th>Correo</th>
                  <th>Discapacidad</th>
                  <th>Nivel de Discapacidad</th>
                  <th>Carnet CONADIS</th>
                  <th>Ocupación</th>
                  <th>Nivel de Formación</th>
                </tr>
              </thead>
              <tbody>
                {data?.discapacidades?.map((e) => (
                  <tr className="bg-white"
                    key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.nombre}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger"
              block onClick={onClickEliminar}>Eliminar</Button>
          </div>
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/personas" />
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
