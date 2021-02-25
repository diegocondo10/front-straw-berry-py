import { useQuery } from '@apollo/client';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import PersonalContainer from 'src/components/pages/personas/personal';
import { getPersonalTable } from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import React from 'react';

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
