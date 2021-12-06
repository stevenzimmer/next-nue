import Head from "next/head";
import { marked } from "marked";

// Strapi API config
import { API_URL } from "@/config/index";

export default function Msa({ data }) {
    return (
        <>
            <Head>
                <title>{data.data.attributes.Title}</title>
                <meta key="robots" name="robots" content="noindex,follow" />
            </Head>
            <div className="container py-40">
                <div className="flex justify-center">
                    <div className="w-11/12 lg:w-10/12  xl:w-8/12">
                        <div className="content">
                            <h1>{data.data.attributes.Title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marked(
                                        data.data.attributes.Content
                                    ),
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const res = await fetch(`${API_URL}/api/msa`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
        revalidate: 1,
    };
}
