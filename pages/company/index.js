import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

// Next
import Head from "next/head";

// Components
import Header1 from "@/components/text/Header1";
import Header2 from "@/components/text/Header2";
import HeaderLabel from "@/components/text/HeaderLabel";
import Section from "@/components/Section";
import IconPill from "@/components/IconPill";
import SectionFade from "@/components/SectionFade";
import AboutBubble from "@/components/AboutBubble";
import LeaderProfile from "@/components/LeaderProfile";

// Blobs
import BlobRed3 from "@/components/blobs/Red3";
import BlobWhite1 from "@/components/blobs/White1";

import BlurRed1 from "@/components/blurs/Red1";

import { leaders } from "@/data/leadership";
import { icons } from "@/data/icons";

export default function About() {
    const controls = useAnimation();

    const { observe, unobserve, inView, scrollDirection, entry } = useInView({
        threshold: 0.25, // Default is 0
        onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
            // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            controls.start("show");
            unobserve();
            // Triggered when the target enters the viewport
        },
        onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
            // Triggered when the target leaves the viewport
            // controls.start("leave");
        },
        // More useful options...
    });
    return (
        <>
            <Head>
                <title>About Nue</title>
                <meta
                    name="description"
                    content="Modern business starts with empowering
                                    RevOps"
                />
                <meta property="og:title" content="About nue" />
                <meta
                    property="og:description"
                    content="Modern business starts with empowering
                    RevOps"
                />
            </Head>
            <Section bgColor="bg-gradient-to-br from-white via-red-50 to-white ">
                <SectionFade />
                <div className="absolute top-0 right-0 ">
                    <BlobRed3 />
                </div>
                <div className="absolute -top-0 left-0 ">
                    <BlobWhite1 />
                </div>
                <div className="absolute -top-96 right-0">
                    <BlurRed1 />
                </div>

                <div className="container relative pt-32 lg:pt-40">
                    <div className="flex justify-center mb-12">
                        <div className="w-11/12 md:w-full lg:w-11/12 xl:w-9/12 text-center">
                            <HeaderLabel>About Nue</HeaderLabel>
                            <Header1>
                                Modern business starts with empowering RevOps
                            </Header1>
                        </div>
                    </div>
                    <div className="flex justify-center mb-24">
                        <div className="w-11/12 md:w-10/12 xl:w-8/12 text-xl lg:text-3xl font-hntMedium">
                            <p className="mb-6 leading-normal">
                                “Go-to-market motions today have seen a
                                collision of new requirements. At Nue we believe
                                that the right way to accelerate business
                                results is by giving RevOps teams the agility to
                                sell however they want and wherever they want –
                                with complete revenue visibility end-to-end.
                            </p>
                            <p className="mb-12 leading-normal">
                                No more cobbling together solutions. No more
                                coding projects. No more systems integrators.
                                Just hit go. Nue enables every go-to-market
                                motion expected of the modern business.”
                            </p>
                            <p className="font-hntMedium mb-12">Nue Team</p>
                        </div>
                    </div>

                    <div className="flex justify-center relative ">
                        <div className="flex justify-center w-full absolute top-0 left-0 transform -translate-x-20 md:-translate-x-32 lg:-translate-x-72">
                            <div className="relative w-full h-48 md:h-72 lg:h-80 xl:h-88 flex justify-center flex-row-reverse ">
                                <AboutBubble color="indigo">
                                    Channels
                                </AboutBubble>
                                <div className=" flex-col justify-center hidden lg:flex">
                                    <div className="flex items-center flex-row-reverse mb-2 relative transform translate-x-20 ">
                                        <div className="w-28 h-0.5 bg-indigo-200 mt-3"></div>

                                        <div className="relative px-2 ">
                                            <div className="flex items-center w-full justify-start -mx-2 mb-2">
                                                <div className="mx-2">
                                                    {icons.headphones()}
                                                </div>
                                                <div className="ml-1">
                                                    <p className="text-indigo-200 text-lg font-hntMedium">
                                                        +
                                                    </p>
                                                </div>
                                                <div className="mx-2">
                                                    {icons.shoppingCart()}
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="font-hntMedium">
                                                    Convergence of B2B <br />
                                                    and B2C
                                                </p>
                                            </div>
                                            <div className="absolute py-2 flex flex-col items-start">
                                                <IconPill
                                                    color="bg-indigo-100"
                                                    svg={icons.inAppSelfService()}
                                                >
                                                    In-app Self service
                                                </IconPill>
                                                <IconPill
                                                    color="bg-indigo-100"
                                                    svg={icons.directSales()}
                                                >
                                                    Direct sales
                                                </IconPill>

                                                <IconPill
                                                    color="bg-indigo-100"
                                                    svg={icons.websiteSales()}
                                                >
                                                    Website sales
                                                </IconPill>

                                                <IconPill
                                                    color="bg-indigo-100"
                                                    svg={icons.partnerSales()}
                                                >
                                                    Partner sales
                                                </IconPill>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full flex justify-center translate-x-20 md:translate-x-24 md:translate-x-32 lg:translate-x-72">
                            <AboutBubble color="blue">Changes</AboutBubble>
                            <div className="flex-col justify-center hidden lg:flex">
                                <div className="flex items-center mb-2 relative transform -translate-x-20">
                                    <div className="w-28 h-0.5 bg-blue-200 mt-3 "></div>

                                    <div className="relative px-2">
                                        <div className="flex items-center w-full justify-start -mx-2 mb-2">
                                            <div className="mx-2">
                                                {icons.profile()}
                                            </div>
                                            <div className="mx-2">
                                                {icons.timeline()}
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-hntMedium">
                                                Dynamic Customer <br />
                                                Journeys
                                            </p>
                                        </div>
                                        <div className="absolute py-2 flex flex-col items-start">
                                            <IconPill
                                                color="bg-blue-100"
                                                svg={icons.upgradeDowngrades()}
                                            >
                                                Upgrades / Downgrades
                                            </IconPill>
                                            <IconPill
                                                color="bg-blue-100"
                                                svg={icons.renewals()}
                                            >
                                                Renewals
                                            </IconPill>

                                            <IconPill
                                                color="bg-blue-100"
                                                svg={icons.upsells()}
                                            >
                                                Upsells
                                            </IconPill>
                                            <IconPill
                                                color="bg-blue-100"
                                                svg={icons.usageConsumption()}
                                            >
                                                Usage Consumption
                                            </IconPill>

                                            <IconPill
                                                color="bg-blue-100"
                                                svg={icons.landExpands()}
                                            >
                                                Land &amp; Expands
                                            </IconPill>

                                            <IconPill
                                                color="bg-blue-100"
                                                svg={icons.amendments()}
                                            >
                                                Amendments
                                            </IconPill>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center transform -translate-y-20 md:-translate-y-24 lg:-translate-y-36">
                        <div className=" ">
                            <AboutBubble color="green">Complexity</AboutBubble>
                            <div className="w-64 mx-auto -translate-y-28 hidden lg:block">
                                <div className="h-28 w-0.5 bg-green-200 mx-auto mb-6"></div>
                                <div className="text-center ">
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="px-2">
                                            <div>
                                                {icons.subscriptions.lg()}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-green-200">+</p>
                                        </div>
                                        <div className="px-2">
                                            {icons.consumption.lg()}
                                        </div>
                                        <div>
                                            <p className="text-green-200">+</p>
                                        </div>
                                        <div className="px-2">
                                            {icons.physicalGoods.lg()}
                                        </div>
                                        <div>
                                            <p className="text-green-200">+</p>
                                        </div>
                                        <div className="px-2">
                                            {icons.services.lg()}
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-hntMedium">
                                            Subscription + Consumption +
                                            Physical Goods + Services
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container relative pb-40 lg:hidden">
                        <div className="flex justify-center">
                            <div className="w-11/12">
                                <div className="mb-12">
                                    <div className="flex items-center justify-center w-full  mb-2">
                                        <div className="mx-2">
                                            {icons.headphones()}
                                        </div>
                                        <div className="ml-1">
                                            <p className="text-indigo-200 text-lg font-hntMedium">
                                                +
                                            </p>
                                        </div>
                                        <div className="mx-2">
                                            {icons.shoppingCart()}
                                        </div>
                                    </div>
                                    <div className="text-center mb-6">
                                        <p className="text-center mb-2 text-xl lg:text-2xl font-hntMedium ">
                                            Channels
                                        </p>
                                        <p className="font-hntMedium">
                                            Convergence of B2B and B2C
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap justify-center ">
                                        <IconPill
                                            color="bg-indigo-100"
                                            svg={icons.inAppSelfService()}
                                        >
                                            In-app Self service
                                        </IconPill>
                                        <IconPill
                                            color="bg-indigo-100"
                                            svg={icons.directSales()}
                                        >
                                            Direct sales
                                        </IconPill>

                                        <IconPill
                                            color="bg-indigo-100"
                                            svg={icons.websiteSales()}
                                        >
                                            Website sales
                                        </IconPill>

                                        <IconPill
                                            color="bg-indigo-100"
                                            svg={icons.partnerSales()}
                                        >
                                            Partner sales
                                        </IconPill>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <div className="flex items-center w-full justify-center  mb-2">
                                        <div className="mx-2">
                                            {icons.profile()}
                                        </div>
                                        <div className="mx-2">
                                            {icons.timeline()}
                                        </div>
                                    </div>
                                    <div className="text-center mb-6">
                                        <p className="text-center mb-2 text-xl lg:text-2xl font-hntMedium ">
                                            Changes
                                        </p>
                                        <p className="font-hntMedium">
                                            Dynamic Customer Journeys
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap justify-center">
                                        <IconPill
                                            color="bg-blue-100"
                                            svg={icons.upgradeDowngrades()}
                                        >
                                            Upgrades / Downgrades
                                        </IconPill>
                                        <IconPill
                                            color="bg-blue-100"
                                            svg={icons.renewals()}
                                        >
                                            Renewals
                                        </IconPill>

                                        <IconPill
                                            color="bg-blue-100"
                                            svg={icons.upsells()}
                                        >
                                            Upsells
                                        </IconPill>
                                        <IconPill
                                            color="bg-blue-100"
                                            svg={icons.usageConsumption()}
                                        >
                                            Usage Consumption
                                        </IconPill>

                                        <IconPill
                                            color="bg-blue-100"
                                            svg={icons.landExpands()}
                                        >
                                            Land &amp; Expands
                                        </IconPill>

                                        <IconPill
                                            color="bg-blue-100"
                                            svg={icons.amendments()}
                                        >
                                            Amendments
                                        </IconPill>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-center justify-center mb-2">
                                        <div className="px-2">
                                            <div>
                                                {icons.subscriptions.lg()}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-green-200">+</p>
                                        </div>
                                        <div className="px-2">
                                            {icons.consumption.lg()}
                                        </div>
                                        <div>
                                            <p className="text-green-200">+</p>
                                        </div>
                                        <div className="px-2">
                                            {icons.physicalGoods.lg()}
                                        </div>
                                        <div>
                                            <p className="text-green-200">+</p>
                                        </div>
                                        <div className="px-2">
                                            {icons.services.lg()}
                                        </div>
                                    </div>
                                    <div className="text-center ">
                                        <p className="text-center mb-2 text-xl lg:text-2xl font-hntMedium ">
                                            Complexity
                                        </p>
                                        <p className="font-hntMedium">
                                            Subscription + Consumption +
                                            Physical + Goods + Services
                                        </p>
                                    </div>
                                    {/* 
                                    <div className="flex flex-wrap justify-center hidden">
                                        <IconPill
                                            color="bg-green-100"
                                            svg={icons.physicalGoods.sm()}
                                        >
                                            Physical Goods
                                        </IconPill>

                                        <IconPill
                                            color="bg-green-100"
                                            svg={icons.services.sm()}
                                        >
                                            Services
                                        </IconPill>
                                        <IconPill
                                            color="bg-green-100"
                                            svg={icons.consumption.sm()}
                                        >
                                            Consumption
                                        </IconPill>
                                        <IconPill
                                            color="bg-green-100"
                                            svg={icons.subscriptions.sm()}
                                        >
                                            Subscriptions
                                        </IconPill>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 hidden">
                        <div className="w-11/12 md:w-10/12 xl:w-6/12">
                            <div className="text-center">
                                <Header2>About the team</Header2>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center hidden">
                        <div className="w-11/12 md:w-10/12 xl:w-6/12">
                            <div className="text-center">
                                <p className="font-hntRegular leading-normal text-xl">
                                    Nue was founded by a team that built Zuora,
                                    Anaplan, and Salesforce Steelbrick (now
                                    Salesforce CPQ). Our investors include
                                    Information Venture Partners, NextWorld
                                    Capital, and SV Technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-40 text-center">
                        <div className="mb-12">
                            <Header2>Leadership</Header2>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-full xl:w-9/12">
                                <div className="flex flex-wrap justify-center sm:justify-start">
                                    {leaders.map((leader, i) => {
                                        return (
                                            <LeaderProfile
                                                leader={leader}
                                                key={i}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
