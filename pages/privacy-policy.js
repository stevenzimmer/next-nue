import Head from "next/head";
// Strapi API config
import { API_URL } from "@/config/index";
export default function PrivacyPolicy({ data }) {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <div className="container py-40">
                <div className="flex justify-center">
                    <div className="w-11/12 lg:w-10/12  xl:w-8/12">
                        <div className="content">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data.data.attributes.body,
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
    const res = await fetch(`${API_URL}/api/privacy-policy`);
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
