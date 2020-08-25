import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@assets/css/dataTable.scss';
import '@assets/css/navbar.scss';
import '@assets/css/root-styles.scss';
import '@assets/css/vars.scss';
import 'bootswatch/dist/flatly/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import moment from 'moment';
import 'moment/locale/es';
import 'popper.js';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
//import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import { ToastProvider } from 'react-toast-notifications';

moment.locale('es');

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  //uri: 'https://straw-berry-py.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000} placement="bottom-left">
      <ApolloProvider client={client}>
        <Component {...{ ...pageProps }} />
      </ApolloProvider>
    </ToastProvider>
  );
};

export default MyApp;
