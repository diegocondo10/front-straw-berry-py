import React from "react";
import PrivateLayout from "@/layouts/privateLayout";
import BreadCrumb from "@/components/BreadCrumb";

const AplicacionesContainer = ({ breadCrumbItems }) => {
  return (
    <PrivateLayout title='IPCA | Aplicaciones'>
      <main className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1 className='text-center my-5 display-4'>Aplicaciones</h1>
          </div>

          <div className='col-md-8'>
            <BreadCrumb items={breadCrumbItems} />
          </div>

          <div className='col-12'></div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AplicacionesContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: "Aplicaciones",
        href: "/auth/aplicaciones",
        active: true,
      },
    ],
  };
};

export default AplicacionesContainer;
