import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Button, ButtonProps } from 'primereact/button';
import React, { useMemo } from 'react';
import useUsuario from 'src/_redux/hooks/useUsuario';

type Props = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'help';
  outlined?: boolean;
  block?: boolean;
  permiso?: string;
};
const HrefButton = (props: HrefButtonProps) => {
  const {
    onClick,
    href,
    className,
    variant = 'primary',
    block,
    outlined,
    permiso,
    disabled,
    ...rest
  } = props;

  const router = useRouter();
  const { hasPerm } = useUsuario();
  const onHref = (event) => {
    onClick && onClick(event);
    if (href) {
      router.push(href);
    }
  };

  const disabledButton = useMemo(() => {
    if (disabled) return true;
    if (permiso) return !hasPerm(permiso);
    return false;
  }, [disabled, permiso]);

  return (
    <Button
      onClick={onHref}
      className={classnames({
        [className]: true,
        [`p-button-${variant}`]: !!variant,
        'p-button-outlined': outlined,
        'btn-block': block,
      })}
      disabled={disabledButton}
      {...rest}
    />
  );
};

export default HrefButton;

export type HrefButtonProps = ButtonProps & Props;
