// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// custom css
import "@/styles/globals.css";
// custom scss
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
