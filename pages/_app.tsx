import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import '@assets/css/dataTable.scss';
import '@assets/css/navbar.scss';
import '@assets/css/root-styles.scss';
import '@assets/css/vars.scss';
import { Usuario } from '@services/auth.service';
import '@styles/_loading.scss';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import moment from 'moment';
import 'moment/locale/es';
import 'popper.js';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { addLocale, locale } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
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
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  });
  locale('es');
  moment.locale('es');
};

const link = createHttpLink({
  uri: 'http://localhost:9000/graphql',
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

  cache: new InMemoryCache({ addTypename: false }),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    setLocale();
  }, []);
  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="bottom-left">
      <ApolloProvider client={client}>
        <Component {...{ ...pageProps }} />
      </ApolloProvider>
    </ToastProvider>
  );
};

export default MyApp;
