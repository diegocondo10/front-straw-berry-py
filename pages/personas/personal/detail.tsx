import { useQuery } from '@apollo/client';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import PersonaQueries from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const DetailDocenteContainer = ({ id }) => {
  const history = useRouter();

  //const data = {};
  const { data, loading } = useQuery(PersonaQueries.getPersonalByIdDetail, {
    variables: { id },
  });

  const onClickEliminar = async () => {
    history.push('/personal');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Personal IPCA"
          items={[
            { title: 'Personal', href: '/personas/personal' },
            {
              title: data?.personal?.persona?.str,
              href: `/personas/personal/update/?id=${id}`,
            },
          ]}
        />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="text-underline">Información</h3>

            <DynamicDetailTable
              source={data?.personal}
              diccionario={[
                {
                  label: 'Persona',
                  body: (value) => {
                    return (
                      <Link href={`/personas/detail?id=${value?.persona?.id}`}>
                        <a>{value?.persona?.str}</a>
                      </Link>
                    );
                  },
                },
                {
                  label: 'Funciones que ejerce',
                  body: (value) => {
                    return (
                      <ul>
                        {value?.funciones?.map?.((funcion, index) => (
                          <li key={index}>{funcion?.nombre}</li>
                        ))}
                      </ul>
                    );
                  },
                },
                {
                  label: 'Título',
                  path: 'titulo',
                },
                {
                  label: 'Tipo de título',
                  path: 'tipoTitulo',
                },
                {
                  label: 'Área de trabajo',
                  path: 'areaDeTrabajo',
                },
              ]}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/personas/personal" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailDocenteContainer.getInitialProps = async ({ query }) => query;

export default DetailDocenteContainer;
