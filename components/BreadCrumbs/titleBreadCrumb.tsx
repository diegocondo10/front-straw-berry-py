import React from 'react';
import BreadCrumb, { ItemBreadCrumb } from './index';

export type TitleBreadCrumbProps = {
  title?: string;
  basePath?: string;
  baseTitle?: string;
  items: ItemBreadCrumb[];
};

const TitleBreadCrumb: React.FC<TitleBreadCrumbProps> = ({
  title = '',
  basePath = '/',
  baseTitle = 'Dashboard',
  items = [],
}) => (
  <div className="d-flex flex-column flex-sm-row justify-content-sm-between my-5 mx-sm-2 mx-md-4">
    <h3 className="align-self-center">{title}</h3>

    <div className="align-self-center">
      <BreadCrumb items={items} basePath={basePath} baseTitle={baseTitle} />
    </div>
  </div>
);

export default TitleBreadCrumb;
