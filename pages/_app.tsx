import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import 'popper.js';
import '@popperjs/core/dist/umd/popper.min.js';
import { Usuario } from '@services/auth.service';
import '@styles/root-styles.scss';
import { createUploadLink } from 'apollo-upload-client';
import UsuarioProvider from 'contexts/UserProvider';
import 'jquery/dist/jquery.min.js';
import moment from 'moment';
import 'moment/locale/es';
import { addLocale, locale } from 'primereact/api';
import { useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';

const setLocale = () => {
  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Nar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  });
  locale('es');
  moment.locale('es');
};

const link = createUploadLink({
  uri: 'http://localhost:8000/graphql',
  // uri: 'https://straw-berry-py.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const usuario = Usuario.getStorageData();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: usuario ? `JWT ${usuario.token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  // ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache({ addTypename: false }),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    setLocale();
  }, []);
  return (
    <ApolloProvider client={client}>
      <UsuarioProvider>
        <ToastProvider autoDismiss autoDismissTimeout={15000} placement="top-right">
          <Component {...pageProps} />
        </ToastProvider>
      </UsuarioProvider>
    </ApolloProvider>
  );
};

export default MyApp;
