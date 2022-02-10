import { Link as ReactScrollLink } from "react-scroll";

import qs from "qs";

// Next
import Head from "next/head";

// Components
import Header1 from "@/components/text/Header1";
import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";
import HeaderP from "@/components/text/HeaderP";

// Strapi API config
import { API_URL } from "@/config/index";

export default function Careers({ jobs }) {
    return (
        <>
            <Head>
                <title>We&apos;re hiring!</title>
                <meta
                    name="description"
                    content="We are looking for curious, energetic rock stars to join our engineering team."
                />
            </Head>
            <Section bgColor="bg-gradient-to-br from-white via-red-50 to-red-100">
                <SectionFade />

                <div className="container relative py-32 lg:py-40">
                    <div className="flex justify-center">
                        <div className="w-11/12 md:w-full">
                            <div className="text-center mb-12 md:mb-24">
                                <div className="mb-6">
                                    <Header1>We&apos;re growing fast</Header1>
                                </div>
                                <HeaderP>
                                    If interested, please email your resume to{" "}
                                    <a
                                        className="underline font-hntMedium"
                                        href="mailto:careers@nue.io"
                                    >
                                        careers@nue.io
                                    </a>
                                </HeaderP>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-between ">
                        <div className="w-11/12 lg:w-3/12 mb-6 lg:mb-0 lg:py-12">
                            <div className="px-6 py-4 bg-white rounded-lg shadow-lg">
                                <div className="mb-2 border-b pb-2">
                                    <p className="text-lg">Open roles</p>
                                </div>
                                <div className="">
                                    {jobs.data.map((job, i) => {
                                        return (
                                            <ReactScrollLink
                                                key={i}
                                                to={job.attributes.Anchor}
                                                smooth={true}
                                                duration={200}
                                                className="text-lg cursor-pointer block mb-2 font-hntMedium hover:text-blue-500 transition-colors duration-200"
                                            >
                                                {job.attributes.Title}
                                            </ReactScrollLink>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 lg:w-8/12">
                            {jobs.data.map((job, i) => {
                                return (
                                    <div
                                        className="py-12 border-b"
                                        id={job.attributes.Anchor}
                                        key={i}
                                    >
                                        <div className="mb-6">
                                            <h2 className="text-2xl md:text-5xl font-hntMedium">
                                                {job.attributes.Title}
                                            </h2>
                                        </div>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: job.attributes
                                                    .Description,
                                            }}
                                            className="content"
                                        ></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
export async function getStaticProps(context) {
    const query = qs.stringify(
        {
            sort: ["id:desc"],
            populate: "*",
        },
        {
            encodeValuesOnly: true,
        }
    );
    const res = await fetch(`${API_URL}/api/jobs?${query}`);
    const jobs = await res.json();

    if (!jobs) {
        return {
            notFound: true,
        };
    }

    return {
        props: { jobs },
        revalidate: 1,
    };
}
