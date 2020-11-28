import { useMutation, useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import ItemDetailPersona from '@components/pages/personas/ItemDetailPersona';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const DetailAlumnoContainer = ({ items, id }) => {
  const history = useRouter();
  const { data, loading } = useQuery(PersonaQueries.getByIdAlumno, {
    variables: { id },
  });

  const [deleteAlumno] = useMutation(PersonaMutations.deleteAlumno, { variables: { id } });

  const onClickEliminar = async () => {
    await deleteAlumno();
    history.push('/personas/alumnos');
  };

  const alumno = data?.alumno;

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Alumno" items={items} />
        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">

            <ul className="w-100">
              <ItemDetailPersona persona={alumno?.persona} />
            </ul>

            <h4 className="text-underline">Información Familiar</h4>
            <ul className="w-100">
              <ItemDetailPersona persona={alumno?.padre} label="Padre: " />
              <ItemDetailPersona persona={alumno?.madre} label="Madre: " />
              <ItemDetailPersona
                persona={alumno?.representante}
                label="Representante: "
              />
              <li>
                <strong>Relación con el Representante: </strong>
                {alumno?.relacionRepresentante}
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/personas/alumnos" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailAlumnoContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Alumno', href: '/personas/alumnos' },
      { title: query.id, href: `/personas/alumnos/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default DetailAlumnoContainer;
