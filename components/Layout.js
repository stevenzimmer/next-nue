import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children, data }) {
    return (
        <>
            <Head>
                <title>{data.metatitle}</title>
                <meta name="description" content={data.metadescription} />
                <link rel="icon" href="/nue-favicon.png" />
                <link
                    href="/fonts/HelveticaNowText/index.css"
                    rel="stylesheet"
                />
            </Head>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>

            <Footer />
        </>
    );
}
