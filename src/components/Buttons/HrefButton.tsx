import { useRouter } from "next/router";
import { Button, ButtonProps } from "primereact/button";
import React from "react";

const HrefButton = (props: HrefButtonProps) => {
  const { onClick, href, ...rest } = props;

  const router = useRouter();

  const onHref = (event) => {
    onClick && onClick(event);
    router.push(href);
  };

  return <Button {...rest} onClick={onHref} />;
};

export default HrefButton;

type Props = {
  href: string;
};

export type HrefButtonProps = ButtonProps & Props;
