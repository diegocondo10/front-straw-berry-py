import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Button, ButtonProps } from 'primereact/button';
import React from 'react';

type Props = {
  href?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'info'
    | 'help'
    | ''
    | ''
    | ''
    | '';
  outlined?: boolean;
  block?: boolean;
};
const HrefButton = (props: HrefButtonProps) => {
  const {
    onClick,
    href,
    className,
    variant = 'primary',
    block,
    outlined,
    ...rest
  } = props;

  const router = useRouter();

  const onHref = (event) => {
    onClick && onClick(event);
    if (href) {
      router.push(href);
    }
  };

  return (
    <Button
      {...rest}
      onClick={onHref}
      className={classnames({
        [className]: true,
        [`p-button-${variant}`]: !!variant,
        'p-button-outlined': outlined,
        'btn-block': block,
      })}
    />
  );
};

export default HrefButton;

export type HrefButtonProps = ButtonProps & Props;
