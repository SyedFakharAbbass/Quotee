import '@/styles/globals.css';
import { wrapper } from "../store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return <><ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /><Component {...pageProps} /></>
}

export default wrapper.withRedux(MyApp);