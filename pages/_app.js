import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import Layout from "@/components/Layout";

function MdrnApp({ Component, pageProps }) {
    return (
        <AuthProvider>
          
            <Layout
                {...pageProps}
                onClick={() => {
                    console.log("click");
                }}
            >
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MdrnApp;
