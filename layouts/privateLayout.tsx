import { useQuery } from '@apollo/client';
import Loading from '@components/Loading';
import PrivateNavbar from '@components/navbar/privateNavbar';
import { me } from '@graphql/Auth/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { UsuarioContext } from 'contexts/UserProvider';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ScrollTop } from 'primereact/scrolltop';
import React, { useContext, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

export type PrivateLayoutProps = {
  children: any;
  title?: string;
  loading?: boolean;
  loadingText?: string;
  headerChildren?: any;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = (props) => {
  const { children, title = '', loading, loadingText, headerChildren } = props;
  // const { loading: loadingUsuario, usuario } = useUsuario();
  const ref = useRef(null);
  const { setUsuario } = useContext(UsuarioContext);
  const router = useRouter();
  const { addWarningToast } = useCustomToast();

  useQuery(me, {
    pollInterval: 60 * 1000,
    onCompleted: ({ usuario }) => {
      setUsuario(usuario);
      if (!usuario) {
        router.push('/login');
        addWarningToast('Por favor iniciar sesion');
      }
      // console.log(usuario);
    },
  });

  return (
    <React.Fragment>
      <Head>
        <title>IPCA | {title}</title>
      </Head>

      <div className="d-flex flex-row full_height">
        <div className="d-flex flex-column w-100">
          <header
          // ref={ref}
          >
            <PrivateNavbar />
            {!loading && headerChildren}
          </header>
          <Loading loading={loading} text={loadingText}>
            {/* <PerfectScrollbar> */}
            <div className="scroll__container" style={{ overflowY: 'auto' }}>
              {!loading && children}
              <ScrollTop
                target="parent"
                threshold={400}
                className="p-button-info"
                icon="pi pi-arrow-up"
              />
            </div>
            {/* </PerfectScrollbar> */}
          </Loading>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivateLayout;
