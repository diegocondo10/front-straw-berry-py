import BreadCrumb from "@/components/BreadCrumb";
import PrivateLayout from "@/layouts/privateLayout";
import React from "react";

const AplicacionContainer = ({ breadCrumbItems }) => {
  return (
    <PrivateLayout>
      <main className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1 className='text-center my-5 display-4'>Aplicación</h1>
          </div>

          <div className='col-md-8'>
            <BreadCrumb items={breadCrumbItems} />
          </div>
        </div>

        <h1></h1>
      </main>
    </PrivateLayout>
  );
};

AplicacionContainer.getInitialProps = async ({ query }) => {
  const breadCrumbItems = [
    {
      title: "Aplicaciones",
      href: "/auth/aplicaciones",
    },
  ];

  if (query._id) {
    breadCrumbItems.push({
      title: "Editar Aplicación",
      active: true,
    });
  } else {
    breadCrumbItems.push({
      title: "Agregar Aplicación",
      active: true,
    });
  }

  return {
    breadCrumbItems,
  };
};

export default AplicacionContainer;
