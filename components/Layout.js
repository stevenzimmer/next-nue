import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/nue-favicon.png" />
                <link
                    href="/fonts/HelveticaNowText/index.css"
                    rel="stylesheet"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />

                <meta property="og:url" content="https://www.nue.io/" />
                <meta property="og:site_name" content="nue" />

                <meta property="og:image" content="/social/open-graph.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
            </Head>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>

            <Footer />
        </>
    );
}
