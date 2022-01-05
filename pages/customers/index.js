import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Components
import Header1 from "@/components/text/Header1";
import HeaderLabel from "@/components/text/HeaderLabel";
import Section from "@/components/Section";
import SectionFade from "@/components/SectionFade";

import { customersData } from "@/data/customers";

export default function CustomersIndex() {
    return (
        <>
            <Head>
                <title>Customers | Nue.io</title>
                <meta
                    name="description"
                    content="RevOps teams do extraordinary things with Nue"
                />
            </Head>

            <div className="bg-gradient-to-br from-pink-50 via-white to-indigo-50 relative overflow-hidden ">
                <Section>
                    <SectionFade />
                    <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
                        <div className="w-full h-full clip-path-right bg-pink-50 opacity-75"></div>
                    </div>
                    <div className="container relative z-20">
                        <div className="flex justify-center pt-32 lg:pt-40 md:mb-12">
                            <div className="w-11/12 md:w-8/12 lg:w-10/12 xl:w-8/12 xl:px-6">
                                <div className="text-center  ">
                                    <div className="mb-6">
                                        <HeaderLabel>customers</HeaderLabel>
                                        <Header1>
                                            RevOps teams do extraordinary things
                                            with Nue
                                        </Header1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center  ">
                            <div className="w-11/12 md:-full lg:w-11/12 xl:w-10/12 ">
                                <div className="flex justify-between flex-wrap -mx-3 mb-12 ">
                                    <div className="w-full md:w-6/12 lg:w-5/12 px-3 mb-6 md:mb-0">
                                        <div>
                                            <div className="mb-2">
                                                <p className="text-black text-opacity-60 uppercase">
                                                    customer story
                                                </p>
                                            </div>
                                            <div className="mb-2 md:mb-12">
                                                <Link
                                                    href={`/customers/${customersData[0].id}`}
                                                >
                                                    <a className="font-hntMedium text-2xl md:text-xl lg:text-3xl leading-normal hover:text-indigo-300">
                                                        &#8220;
                                                        {
                                                            customersData[0]
                                                                .quote.text
                                                        }
                                                        &#8221;
                                                    </a>
                                                </Link>
                                            </div>
                                            <div>
                                                <p>
                                                    {
                                                        customersData[0].quote
                                                            .name
                                                    }
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-black text-opacity-60">
                                                    {
                                                        customersData[0].quote
                                                            .title
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-6/12 lg:w-7/12 px-3">
                                        <div className="relative group">
                                            <Link
                                                href={`/customers/${customersData[0].id}`}
                                            >
                                                <a className="absolute w-full h-full inset-0 z-30"></a>
                                            </Link>
                                            <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0 group-hover:opacity-75 transition duration-200"></div>

                                            <Image
                                                src={`/images/${customersData[0].thumbnail.url}`}
                                                alt={`Featured customer thumbnail graphic`}
                                                width={663}
                                                height={447}
                                                layout="responsive"
                                            />
                                            <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-between z-20">
                                                <div className="shadow rounded-lg overflow-hidden w-48 ">
                                                    <Image
                                                        src={`/images/${customersData[0].logo.url}`}
                                                        alt={`Featured customer graphic logo`}
                                                        width={230}
                                                        height={93}
                                                        layout="responsive"
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <div>
                                                        <Image
                                                            src={`/images/customers/icons/play-button.png`}
                                                            alt={`Featured graphic`}
                                                            width={55}
                                                            height={55}
                                                        />
                                                    </div>
                                                    <div className="px-3 w-40">
                                                        <p className="text-white uppercase font-hntMedium">
                                                            WATCH THEIR STORY
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center md:justify-start flex-wrap -mx-3 ">
                                    {customersData.map((customer, i) => {
                                        return (
                                            i !== 0 && (
                                                <div
                                                    className="w-full md:w-6/12 px-3 mb-12"
                                                    key={i}
                                                >
                                                    <div className="group">
                                                        <div className="relative mb-2 ">
                                                            <Link
                                                                href={`/customers/${customer.id}`}
                                                            >
                                                                <a className="absolute w-full h-full inset-0 z-30"></a>
                                                            </Link>
                                                            <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 z-10 rounded-lg opacity-0 group-hover:opacity-75 transition duration-200"></div>
                                                            <Image
                                                                src={`/images/${customer.thumbnail.url}`}
                                                                alt={`Featured graphic`}
                                                                width={577}
                                                                height={368}
                                                                layout="responsive"
                                                            />
                                                            {customer.logo && (
                                                                <div className="absolute w-full h-full inset-0 p-6 flex flex-col justify-end z-10">
                                                                    <div className="shadow rounded-lg overflow-hidden w-40 ">
                                                                        <Image
                                                                            src={`/images/${customer.logo.url}`}
                                                                            alt={`Featured graphic`}
                                                                            width={
                                                                                173
                                                                            }
                                                                            height={
                                                                                71
                                                                            }
                                                                            layout="responsive"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="mb-6">
                                                            <Link
                                                                href={`/customers/${customer.id}`}
                                                            >
                                                                <a className="font-hntMedium text-xl md:text-2xl leading-normal group-hover:text-indigo-300">
                                                                    &#8220;
                                                                    {
                                                                        customer
                                                                            .quote
                                                                            .text
                                                                    }
                                                                    &#8221;
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <p>
                                                                {
                                                                    customer
                                                                        .quote
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-black text-opacity-60">
                                                                {
                                                                    customer
                                                                        .quote
                                                                        .title
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        );
                                    })}
                                </div>
                                <div className="flex justify-start flex-wrap -mx-3">
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
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
