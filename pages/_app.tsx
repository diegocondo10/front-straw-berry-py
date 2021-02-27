import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import 'popper.js';
import '@popperjs/core/dist/umd/popper.min.js';
import '@styles/root-styles.scss';
import { createUploadLink } from 'apollo-upload-client';
import 'jquery/dist/jquery.min.js';
import moment from 'moment';
import 'moment/locale/es';
import { addLocale, locale } from 'primereact/api';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import store from 'src/_redux/store';

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
  uri: 'http://localhost:9000/graphql',
  // uri: 'https://straw-berry-py.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('SBPToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  //@ts-ignore
  link: authLink.concat(link),
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache({ addTypename: true }),

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

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    setLocale();
  }, []);
  return (
    <SafeHydrate>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ToastProvider
            autoDismiss
            autoDismissTimeout={15000}
            placement="top-right"
          >
            <Component {...pageProps} />
          </ToastProvider>
        </Provider>
      </ApolloProvider>
    </SafeHydrate>
  );
};

export default MyApp;
