import Head from "next/head";

import PageDefault from "@/layouts/PageDefault";

// Strapi API config
import { API_URL } from "@/config/index";

export default function Msa({ data }) {
    return (
        <>
            <Head>
                <title>{data.data.attributes.Title}</title>
                <meta key="robots" name="robots" content="noindex,follow" />
            </Head>
            <PageDefault>
                <h1 className="mb-6">{data.data.attributes.Title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.data.attributes.Content,
                    }}
                ></div>
            </PageDefault>
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
