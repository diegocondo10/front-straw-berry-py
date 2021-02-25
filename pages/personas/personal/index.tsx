import { useQuery } from '@apollo/client';
import PersonalContainer from '@containers/Personal';
import { getPersonalTable } from '@graphql/Personas/queries.gql';
import React from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import PrivateLayout from 'src/layouts/privateLayout';

const PersonalPage = () => {
  const { loading, data } = useQuery(getPersonalTable);
  return (
    <PrivateLayout title="Personal" loading={loading}>
      <TitleBreadCrumb
        title="Personal"
        items={[
          {
            title: 'Personal',
            active: true,
          },
        ]}
      />
      <PersonalContainer data={data} />
    </PrivateLayout>
  );
};

export default PersonalPage;
