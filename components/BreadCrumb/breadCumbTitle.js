import React from 'react';
import BreadCrumb from './index';

const BreadCrumbTitle = ({
  title,
  basePath = '/',
  baseTitle = 'Dashboard',
  items = [],
}) => {
  return (
    <div className="row justify-content-between my-5 mx-md-4">
      <div className="col-md-3 align-self-center">
        <h2 className="text-center text-md-left">{title}</h2>
      </div>
      <div className=" col-md-9 align-self-center">
        <BreadCrumb items={items} basePath={basePath} baseTitle={baseTitle} />
      </div>
    </div>
  );
};

export default BreadCrumbTitle;
