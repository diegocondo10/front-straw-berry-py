import React from "react";
import Head from "next/head";

const PublicLayout = ({ children, title = "IPCA" }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </React.Fragment>
  );
};

export default PublicLayout;
