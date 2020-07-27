import "@/assets/css/navbar.scss";
import "@/assets/css/root-styles.scss";
import "@/assets/css/vars.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootswatch/dist/lux/bootstrap.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "@/assets/css/dataTable.scss"
export default function MyApp({ Component, pageProps }) {
  return <Component {...{ ...pageProps }} />;
}
