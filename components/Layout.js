import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
    return (
        <>
            <Head>
        
                <link
                    href="/fonts/HelveticaNowText/index.css"
                    rel="stylesheet"
                />
        
          <meta name="robots" content="noindex, nofollow" />
         
            </Head>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>

            <Footer />
        </>
    );
}
