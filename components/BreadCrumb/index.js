import Link from 'next/link';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadCrumb = ({ basePath = '/', baseTitle = 'Dashboard', items = [] }) => {
  return (
    <Breadcrumb>
      <li className="breadcrumb-item">
        <Link href={basePath}>
          <a>{baseTitle}</a>
        </Link>
      </li>

      {items.map((item, index) => {
        if (item.active) {
          return (
            <li key={index} className="breadcrumb-item active">
              <a>{item.title}</a>
            </li>
          );
        } else {
          return (
            <li key={index} className="breadcrumb-item">
              <Link href={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        }
      })}
    </Breadcrumb>
  );
};

export default BreadCrumb;
