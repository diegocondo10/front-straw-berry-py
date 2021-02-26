import { useQuery } from '@apollo/client';
import { me } from '@graphql/Auth/queries.gql';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ScrollTop } from 'primereact/scrolltop';
import React, { useRef } from 'react';
import TitleBreadCrumb, {
  TitleBreadCrumbProps,
} from 'src/components/BreadCrumbs/titleBreadCrumb';
import Loading from 'src/components/Loading';
import PrivateNavbar from 'src/components/navbar/privateNavbar';
import useCustomToast from 'src/hooks/useCustomToast';
import useUsuario from 'src/_redux/hooks/useUsuario';

export type PrivateLayoutProps = {
  children: any;
  title?: string;
  loading?: boolean;
  loadingText?: string;
  headerChildren?: any;
  breadCrumb?: TitleBreadCrumbProps;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = (props) => {
  const {
    children,
    title = '',
    loading,
    loadingText,
    headerChildren,
    breadCrumb,
  } = props;
  // const { loading: loadingUsuario, usuario } = useUsuario();
  const ref = useRef<any>(null);
  const containerRef = useRef(null);
  // const { setUsuario } = useContext(UsuarioContext);
  const { setUsuario } = useUsuario();
  const router = useRouter();
  const { addWarningToast } = useCustomToast();

  const { loading: loadingUsuario, data } = useQuery(me, {
    pollInterval: 10 * 60000,
    // pollInterval: 2000,
    onCompleted: ({ usuario }) => {
      console.log('USUARIO: ', usuario);
      if (!usuario) {
        router.push('/login');
        addWarningToast('Por favor iniciar sesion');
      } else {
        setUsuario(usuario);
      }
      // console.log(usuario);
    },
  });

  return (
    <React.Fragment>
      <Head>
        <title>IPCA | {title}</title>
      </Head>

      {loadingUsuario && !data && (
        <div className="vh-100 w-100">
          <Loading loading={loading && !data}>
            <React.Fragment />
          </Loading>
        </div>
      )}

      {!loadingUsuario && data && (
        <div className="d-flex flex-row vh-100 w-100">
          <div className="d-flex flex-column w-100">
            <header ref={ref}>
              <PrivateNavbar />
              {!loading && headerChildren}
            </header>
            <Loading loading={loading} text={loadingText}>
              <div
                // className="h-100"
                style={{
                  overflowY: 'auto',
                  height: `calc(100% - ${ref?.current?.offsetHeight}px)`,
                }}
                ref={containerRef}
              >
                {breadCrumb && <TitleBreadCrumb {...breadCrumb} />}
                {!loading && children}
                <ScrollTop
                  target="parent"
                  threshold={400}
                  className="p-button-info"
                  icon="pi pi-arrow-up"
                />
              </div>
            </Loading>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PrivateLayout;
