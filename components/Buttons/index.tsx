import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export const BtnRegresar = ({
  href,
  variant = 'primary',
  block = true,
  label,
  ...props
}) => {
  return (
    <Link href={href}>
      <a className="text-decoration-none">
        <Button variant={variant} block={block} {...props}>
          {label || 'Regresar'}
        </Button>
      </a>
    </Link>
  );
};

export const BtnAgregar = {};
