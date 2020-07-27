import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import classnames from "classnames";

const BreadCrumb = ({
  basePath = "/",
  baseTitle = "Dashboard",
  items = [],
}) => {
  return (
    <Breadcrumb>
      <li className='breadcrumb-item'>
        <Link href={basePath}>
          <a>{baseTitle}</a>
        </Link>
      </li>

      {items.map((item, index) => (
        <li
          key={index}
          className={classnames({
            "breadcrumb-item": true,
            active: !!item.active,
          })}>
          <Link href={item.href}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
