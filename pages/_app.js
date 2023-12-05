import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import link from "next/link";
import { Link } from "react-scroll";

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
                
                <a className="block fixed left-6 bottom-6 z-50 bg-white rounded-lg px-12 py-3 shadow-lg border-2 border-transparent hover:border-blue-200 hover:bg-blue-50 font-hntMedium" href="https://webzim.dev/">&#8592; &nbsp; Back to Webzim</a>
                
            </Layout>
        </AuthProvider>
    );
}

export default MdrnApp;
