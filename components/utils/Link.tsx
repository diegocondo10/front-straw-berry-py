import Link, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type LinkProps = NextLinkProps;

const Hreft: React.FC<LinkProps> = (props) => {
  return (
    <Link {...props}>
      <a style={{ padding: '0 0 0 0' }}>{props.children}</a>
    </Link>
  );
};

export default Hreft;
