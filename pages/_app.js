import "../styles/globals.css";
import Layout from "../components/Layout";

function NueApp({ Component, pageProps }) {
    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default NueApp;
