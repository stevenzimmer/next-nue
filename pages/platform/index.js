import { motion, useAnimation } from "framer-motion";

import Head from "next/head";

import SectionFade from "@/components/SectionFade";
import Section from "@/components/Section";
import Header1 from "@/components/text/Header1";
import HeaderLabel from "@/components/text/HeaderLabel";
import FloatingImage from "@/components/FloatingImage";

import { platformColumns } from "@/data/platform-columns";

const item = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.5, 0.95],
            duration: 1,
        },
    },
};
export default function Platform() {
    const animationControlMain = useAnimation();
    return (
        <>
            <Head>
                <title>
                    Manage your customer revenue lifecycles with one platform
                </title>
                <meta
                    name="description"
                    content="Configure dynamic pricing. Sell on any channel. Expand customer revenue. Know exactly what to bill and when."
                />
            </Head>

            <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden ">
                <SectionFade />
                <div className="absolute w-full h-full right-0 top-0 transform translate-x-2/3">
                    <div className="w-full h-full clip-path-right bg-blue-100 opacity-75"></div>
                </div>
                <div className="absolute w-full h-full left-0 top-48 ">
                    <div className="w-full h-full clip-path-left bg-indigo-100 "></div>
                </div>

                <div className="absolute w-96 h-96  left-0 bottom-0 ">
                    <div className="w-full h-full  clip-path-left bg-blue-50 opacity-75"></div>
                </div>

                <div className="absolute w-1/2 h-1/2 transform rotate-90  right-0 bottom-0 ">
                    <div className="w-full h-full  clip-path-right bg-blue-50 opacity-50"></div>
                </div>

                <Section>
                    <div className="container relative">
                        <div className="flex justify-center pt-32 lg:pt-40 mb-12">
                            <div className="w-11/12 lg:w-8/12 xl:w-6/12">
                                <div className="text-center relative z-20">
                                    <HeaderLabel>platform</HeaderLabel>
                                    <div className="mb-12">
                                        <Header1>
                                            Manage your customer revenue
                                            lifecycles with one platform
                                        </Header1>
                                    </div>

                                    <div className="md:mb-12 flex justify-center">
                                        <div className="w-11/12 sm:w-full ">
                                            <h2 className="text-lg md:text-2xl">
                                                Configure dynamic pricing. Sell
                                                on any channel. Expand customer
                                                revenue. Know exactly what to
                                                bill and when.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <FloatingImage
                                classes={`mx-auto`}
                                src={`/images/platform/hero-3.png`}
                                alt={`Platform hero graphic`}
                                width={1301}
                                height={516}
                                onLoad={() => {
                                    animationControlMain.start("show");
                                }}
                            />
                        </div>

                        <div className="flex justify-center mb-24">
                            <div className="w-11/12 md:w-full xl:w-9/12">
                                <div className="flex justify-center flex-wrap -mx-6">
                                    {platformColumns.top.map((column, i) => {
                                        return (
                                            <div
                                                className="w-full md:w-1/3 px-6 mb-6 md:mb-0"
                                                key={i}
                                            >
                                                <div
                                                    className={`text-center ${
                                                        column.spacer &&
                                                        "md:mt-20"
                                                    }`}
                                                >
                                                    <div className="mb-6">
                                                        {column.icon()}
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-xl">
                                                            {column.text()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-24">
                            <div className="w-11/12 md:w-full xl:w-9/12">
                                <div className="flex justify-center flex-wrap items-stretch -mx-3">
                                    {platformColumns.bottom.map((column, i) => {
                                        return (
                                            <div
                                                className="w-full md:w-1/3 px-3 mb-6 md:mb-0 "
                                                key={i}
                                            >
                                                <div
                                                    className={`text-center bg-white shadow-lg rounded-lg p-6 h-full`}
                                                >
                                                    <div className="mb-6">
                                                        {column.icon()}
                                                    </div>
                                                    <div className="mb-6">
                                                        <p className="font-hntMedium text-xl">
                                                            {column.title}
                                                        </p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-lg">
                                                            {column.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}
