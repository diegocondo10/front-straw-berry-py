import PrivateNavbar from '@components/navbar/privateNavbar';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Loading from '@components/Loading';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import useCustomToast from '@hooks/useCustomToast';

const PrivateLayout = (props?: PrivateLayoutProps) => {
  const { children, title = '', loading, loadingText } = props;

  const router = useRouter();
  const { addWarningToast } = useCustomToast();
  useEffect(() => {
    const usuario = Usuario.getStorageData();
    if (!usuario) {
      router.push('/login');
      addWarningToast('Por favor iniciar sesion');
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Loading loading={loading} text={loadingText}>
        <header>
          <PrivateNavbar />
        </header>

        {!loading && children}
      </Loading>

      <style jsx global>{`
        .full_h {
          height: calc(100vh - 5rem) !important;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PrivateLayout;

export type PrivateLayoutProps = {
  children: any;
  title?: string;
  loading?: boolean;
  loadingText?: string;
};
