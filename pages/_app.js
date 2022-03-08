import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import TagManager from "react-gtm-module";

function NueApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production' && process.env.GTM_ID) {
      console.log('GTM init')
      const tagManagerArgs = {
        id: process.env.GTM_ID,
      }
      TagManager.initialize(tagManagerArgs)
    } else {
      console.log('GTM not initialized')
    }
  }, [])

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

export default NueApp;
