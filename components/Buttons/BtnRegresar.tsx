import { useRouter } from "next/router";
import React from "react";
import { Button, ButtonProps } from "react-bootstrap";

const defaultsBtnRegresar: ButtonProps = {
  variant: "outline-danger",
  block: true,
};

export const BtnRegresar = (props?: BtnRegresarProps) => {
  const { href, label, ...rest } = { ...defaultsBtnRegresar, ...props };
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };

  return (
    <Button {...rest} onClick={onClick}>
      {label || "Regresar"}
    </Button>
  );
};
export type BtnRegresarProps = {
  href: string;
  label?: string;
} & ButtonProps;

export const BtnAgregar = {};
