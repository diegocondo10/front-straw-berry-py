import Link from 'next/link';
import React, { useMemo } from 'react';

export type ItemBreadCrumb = {
  title: string;
  href?: string;
  active?: boolean;
};

export type BreadCrumbProps = {
  basePath: string;
  baseTitle: string;
  items: ItemBreadCrumb[];
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  basePath = '/',
  baseTitle = 'Dashboard',
  items = [],
}) => {
  const basePathComponent = useMemo(
    () => (
      <li className="d-inline breadcrumb-item">
        <Link href={basePath}>
          <a className="font-weight-bold">{baseTitle}</a>
        </Link>
      </li>
    ),
    [basePath, baseTitle],
  );

  const itemsComponent = useMemo(
    () =>
      items.map((item, index) => {
        if (item.active) {
          return (
            <li key={index} className="d-inline breadcrumb-item active">
              <a className="font-weight-bold text-secondary text-decoration-none cpointer">
                {item.title}
              </a>
            </li>
          );
        } else {
          return (
            <li key={index} className="d-inline breadcrumb-item cpointer">
              <Link href={item.href}>
                <a className="font-weight-bold cpointer">{item.title}</a>
              </Link>
            </li>
          );
        }
      }),
    [items],
  );

  return (
    <nav aria-label="breadcrumb" className="text-center text-md-right">
      <ol className="breadcrumb">
        {basePathComponent} {itemsComponent}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
