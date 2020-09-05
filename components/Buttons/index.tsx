import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from 'react-bootstrap';

const defaultsBtnRegresar: ButtonProps = {
  variant: 'outline-danger',
  block: true,
};

export const BtnRegresar = (props?: BtnRegresarProps) => {
  const { href, label, ...rest } = { ...defaultsBtnRegresar, ...props };

  return (
    <Link href={href}>
      <a className="text-decoration-none">
        <Button {...rest}>{label || 'Regresar'}</Button>
      </a>
    </Link>
  );
};
export type BtnRegresarProps = {
  href: string;
  label?: string;
} & ButtonProps;

export const BtnAgregar = {};
