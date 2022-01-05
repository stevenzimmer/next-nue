import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";

import { customersData } from "@/data/customers";

export default function CustomersChild({ data }) {
    // console.log(data);
    return (
        <>
            <Head>
                <title>{data.title} | Customer Story | Nue.io</title>
                <meta
                    name="description"
                    content={`Learn how the revops team at ${data.title} do extraordinary things
                    with Nue`}
                />
            </Head>
            <div className="bg-gradient-to-br from-pink-50 via-white to-indigo-50 relative overflow-hidden ">
                <Section>
                    <SectionFade />

                    <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
                        <div className="w-full h-full clip-path-right bg-pink-50 opacity-75"></div>
                    </div>
                    <div className="container relative z-10">
                        <div className="flex justify-center pt-32 lg:pt-40">
                            <div className="w-11/12 sm:-full lg:w-11/12 xl:w-10/12 ">
                                <div className="flex items-center mb-12">
                                    <div>
                                        <Link href={`/customers/`}>
                                            <a className="text-sm text-indigo-300 hover:underline ">
                                                Customers
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="px-3">
                                        <svg
                                            width="4"
                                            height="8"
                                            viewBox="0 0 4 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.978835 0.671412L3.83125 3.58568C3.88472 3.63986 3.92716 3.70432 3.95613 3.77535C3.98509 3.84638 4 3.92256 4 3.9995C4 4.07645 3.98509 4.15263 3.95613 4.22365C3.92716 4.29468 3.88472 4.35914 3.83125 4.41333L0.978835 7.32759C0.925801 7.38222 0.862705 7.42558 0.793186 7.45517C0.723667 7.48477 0.649102 7.5 0.573791 7.5C0.498481 7.5 0.423915 7.48477 0.354397 7.45517C0.284878 7.42558 0.221782 7.38222 0.168748 7.32759C0.115278 7.27341 0.072837 7.20894 0.0438743 7.13792C0.0149116 7.06689 0 6.99071 0 6.91377C0 6.83682 0.0149116 6.76064 0.0438743 6.68962C0.072837 6.61859 0.115278 6.55413 0.168748 6.49994L2.62183 3.9995L0.168748 1.49906C0.0613239 1.38931 0.000973859 1.24045 0.000973859 1.08524C0.000973859 1.00838 0.0157899 0.932281 0.0445766 0.861277C0.0733634 0.790273 0.115557 0.725757 0.168748 0.671412C0.276172 0.561659 0.421871 0.5 0.573791 0.5C0.649015 0.5 0.723502 0.515138 0.792999 0.544549C0.862497 0.57396 0.925644 0.617068 0.978835 0.671412Z"
                                                fill="black"
                                                fillOpacity="0.8"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="font-hntMedium text-sm">
                                            {data.title}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between flex-wrap -mx-3 mb-12 ">
                                    <div className="w-full md:w-6/12 lg:w-5/12 px-3 mb-6 md:mb-0">
                                        <div>
                                            <div className="mb-2">
                                                <p className="text-black text-opacity-60 uppercase">
                                                    customer story
                                                </p>
                                            </div>
                                            <div className="mb-2 md:mb-12">
                                                <h1 className="font-hntMedium text-2xl md:text-xl lg:text-4xl ">
                                                    &#8220;{data.quote.text}
                                                    &#8221;
                                                </h1>
                                            </div>
                                            <div>
                                                <p className="font-hntMedium">
                                                    {data.quote.name}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-black text-opacity-60">
                                                    {data.quote.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-6/12 lg:w-7/12 px-3">
                                        <div className="relative ">
                                            <Image
                                                src={`/images/${data.thumbnail.url}`}
                                                alt={`Featured customer thumbnail graphic`}
                                                width={663}
                                                height={447}
                                                layout="responsive"
                                            />
                                            {data.logo && (
                                                <div className="absolute w-full h-full bottom-0 p-6 flex flex-col justify-end z-20">
                                                    <div className="shadow rounded-lg overflow-hidden w-48">
                                                        <Image
                                                            src={`/images/${data.logo.url}`}
                                                            alt={`Featured customer graphic logo`}
                                                            width={230}
                                                            height={93}
                                                            layout="responsive"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {data.stats && (
                                    <div className="flex flex-wrap justify-start ">
                                        {data.stats.map((stat, i) => {
                                            return (
                                                <StatColumn
                                                    number={stat.percentage}
                                                    key={i}
                                                >
                                                    {stat.description}
                                                </StatColumn>
                                            );
                                        })}
                                    </div>
                                )}
                                <div className="flex justify-start flex-wrap -mx-6 border-b">
                                    <div className="w-full lg:w-1/4 px-6">
                                        <div className="py-6">
                                            {data.company.description && (
                                                <div className="mb-6">
                                                    <ContentSidebarTitle>
                                                        Company
                                                    </ContentSidebarTitle>
                                                    <div>
                                                        <p className="text-sm">
                                                            {
                                                                data.company
                                                                    .description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                            {data.company.link && (
                                                <>
                                                    <div className="mb-6">
                                                        <ContentSidebarParagraph>
                                                            {data.company.link}
                                                        </ContentSidebarParagraph>
                                                    </div>
                                                </>
                                            )}

                                            {data.company.headquarters && (
                                                <div className="mb-6">
                                                    <ContentSidebarTitle>
                                                        Headquarters
                                                    </ContentSidebarTitle>

                                                    <div>
                                                        <ContentSidebarParagraph>
                                                            {
                                                                data.company
                                                                    .headquarters
                                                            }
                                                        </ContentSidebarParagraph>
                                                    </div>
                                                </div>
                                            )}
                                            {data.company.key_features && (
                                                <>
                                                    <ContentSidebarTitle>
                                                        Key features
                                                    </ContentSidebarTitle>

                                                    <div>
                                                        {data.company.key_features.map(
                                                            (feature, i) => {
                                                                return (
                                                                    <ContentSidebarParagraph
                                                                        key={i}
                                                                    >
                                                                        {
                                                                            feature
                                                                        }
                                                                    </ContentSidebarParagraph>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-full lg:w-2/3 xl:w-1/2 px-6">
                                        <div className="border-t py-6">
                                            <Content />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-12">
                                    <div className="mb-12">
                                        <h2 className="text-5xl font-hntMedium">
                                            Related stories
                                        </h2>
                                    </div>
                                    <div className="flex justify-start flex-wrap -mx-3 ">
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}
function Card() {
    return (
        <div className="w-full md:w-1/2 lg:w-4/12 px-3 mb-6 md:mb-12">
            <div className="group">
                <div className="mb-2 relative">
                    <Link href={`/customers/birdeye/`}>
                        <a className="absolute w-full h-full inset-0 z-30"></a>
                    </Link>
                    <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <Image
                        src={`/images/customers/thumbnails/grid.jpg`}
                        alt={`Featured graphic`}
                        width={380}
                        height={260}
                        layout="responsive"
                    />
                    <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-end z-10">
                        <div className="shadow rounded-lg overflow-hidden w-32">
                            <Image
                                src={`/images/customers/logos/birdeye-bg.jpg`}
                                alt={`Featured graphic`}
                                width={142}
                                height={59}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="font-hntMedium text-xl md:text-2xl group-hover:text-indigo-300">
                        &#8220;We spun up a Deal Desk function in Salesforce in
                        a day using Nue.&#8221;
                    </p>
                </div>
            </div>
        </div>
    );
}

function StatColumn({ number, children }) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
            <div className="mb-2">
                <p className="text-indigo-300 text-5xl md:text-7xl font-hntMedium">
                    {number}
                    <span className="text-black text-xl md:text-3xl">%</span>
                </p>
            </div>
            <div className="lg:w-10/12">
                <p>{children}</p>
            </div>
        </div>
    );
}

function ContentSidebarTitle({ children }) {
    return (
        <div className="mb-2">
            <p className="font-hntMedium">{children}</p>
        </div>
    );
}

function ContentSidebarParagraph({ children }) {
    return (
        <div className="text-sm">
            <p>{children}</p>
        </div>
    );
}

function Content() {
    return (
        <div className="content content-customers">
            <h1>H1 Title goes here</h1>
            <p>
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.{" "}
            </p>
            <p>
                “Go-to-market motions today have seen a collision of new
                requirements. At Nue we believe that the right way to accelerate
                business results is by giving RevOps teams the agility to sell.”
            </p>
            <p>
                <strong>Matt Thomas, Director of Revenue Operations</strong>
            </p>
            <p>
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem.
            </p>
            <h2>H2 Title goes here</h2>
            <p>
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet. Vestibulum bibendum commodo dui gravida convallis. Nam
                lorem risus, feugiat eget vehicula at, posuere sed sem. Nam
                augue diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.
            </p>
            <p>
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.
            </p>
            <h3>H3 Title goes here</h3>
            <p>
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet. Vestibulum bibendum commodo dui gravida convallis. Nam
                lorem risus, feugiat eget vehicula at, posuere sed sem. Nam
                augue diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.
            </p>
            <p>
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.
            </p>
        </div>
    );
}
export const getStaticProps = async (context) => {
    const { slug } = context.params;
    // console.log(slug);

    const data = customersData.find((customer) => customer.id === slug);

    return {
        props: { data },
    };
};

export const getStaticPaths = async (context) => {
    const posts = customersData.map((customer) => {
        return {
            slug: customer.id,
        };
    });

    const paths = posts.map((post) => {
        return {
            params: post,
        };
    });

    return {
        paths,
        fallback: false,
    };
};
