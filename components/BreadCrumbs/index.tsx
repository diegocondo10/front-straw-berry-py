import Link from 'next/link';
import React from 'react';

const BreadCrumb = ({ basePath = '/', baseTitle = 'Dashboard', items = [] }) => {
  return (
    <div className="text-center text-md-right">
      <li className="d-inline breadcrumb-item">
        <Link href={basePath}>
          <a className="font-weight-bold">{baseTitle}</a>
        </Link>
      </li>

      {items.map((item, index) => {
        if (item.active) {
          return (
            <li key={index} className="d-inline breadcrumb-item active">
              <a className="font-weight-bold cpointer">{item.title}</a>
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
      })}
    </div>
  );
};

export default BreadCrumb;
