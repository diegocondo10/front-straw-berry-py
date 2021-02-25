import { Button, ButtonProps } from "primereact/button";
import React from "react";
import classnames from "classnames";

const LoadingButton = (props: LoadingButtonProps) => {
  const { loading, loadingText, className, ...rest } = props;

  const classNames = classnames({
    "btn-block": true,
    [className]: true,
  });

  if (loading) {
    return (
      <Button
        className={classNames}
        disabled={loading}
        label={loadingText}
        {...rest}
      />
    );
  }
  return <Button className={classNames} {...rest} />;
};

export default LoadingButton;

type Props = {
  loading: boolean;
  loadingText: string;
};

export type LoadingButtonProps = ButtonProps & Props;
