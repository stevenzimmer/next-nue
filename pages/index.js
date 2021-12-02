import { motion, useAnimation } from "framer-motion";

// Next
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Components
import HeaderLabel from "@/components/text/HeaderLabel";
import Header1 from "@/components/text/Header1";
import Header2 from "@/components/text/Header2";
import HeaderP from "@/components/text/HeaderP";
import Section from "@/components/Section";
import FloatingImage from "@/components/FloatingImage";
import SectionFade from "@/components/SectionFade";

// Blobs
import BlobGreen1 from "@/components/blobs/Green1";
import BlobGreen2 from "@/components/blobs/Green2";
import BlobGreen3 from "@/components/blobs/Green3";
import BlobBlue1 from "@/components/blobs/Blue1";
import BlobPink1 from "@/components/blobs/Pink1";
import BlobRed1 from "@/components/blobs/Red1";
import BlobRed2 from "@/components/blobs/Red2";
import BlobPurple1 from "@/components/blobs/Purple1";
import BlobPurple2 from "@/components/blobs/Purple2";

// Waves
import WavePurple1 from "@/components/waves/Purple1";

// Strapi API config
import { API_URL } from "@/config/index";

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

export default function Home({ data }) {
    const animationControlMain = useAnimation();

    return (
        <>
            <Head>
                <title>RevOps for the modern company</title>
                <meta
                    name="description"
                    content="The system of record for revenue across the entire customer lifecycle"
                />
            </Head>
            <Section bgColor="bg-gradient-to-br from-green-50 via-indigo-50 to-red-50 ">
                <SectionFade />
                <div className="absolute z-0 top-0 right-0 transform -translate-y-3/4 translate-x-1/4 lg:-translate-y-1/2 lg:translate-x-1/2">
                    <BlobBlue1 />
                </div>
                <div className="absolute z-0 left-0 bottom-0 transform -translate-x-3/4 translate-y-1/2 md:translate-y-1/4 md:-translate-x-1/2">
                    <BlobGreen1 />
                </div>
                <div className="absolute z-0 right-0 bottom-0 transform translate-x-3/4 translate-y-1/3 md:translate-y-1/3 md:translate-x-1/3">
                    <BlobPink1 />
                </div>
                <div className="container relative">
                    <FloatingImage
                        classes={`absolute z-30 bottom-72 lg:top-80 right-0 hidden lg:block`}
                        src={`/images/homepage/ge-box.png`}
                        alt={`GE box image`}
                        width={287}
                        height={114}
                    />
                    <FloatingImage
                        classes={`absolute z-30 top-72 left-0 hidden lg:block`}
                        src={`/images/homepage/squire-box.png`}
                        alt={`Squire box image`}
                        width={277}
                        height={114}
                    />

                    <FloatingImage
                        classes={`absolute z-30 top-96 left-16 hidden lg:block`}
                        src={`/images/homepage/hero-graph.png`}
                        alt={`Homepage hero graph image`}
                        width={312}
                        height={183}
                    />

                    <div className="flex justify-center pt-32 lg:pt-40">
                        <div className="w-11/12 lg:w-7/12 xl:w-5/12">
                            <div className="text-center relative z-20">
                                <div className="mb-6">
                                    <Header1>{data.herotitle}</Header1>
                                </div>

                                <div className="mb-6 flex justify-center">
                                    <div className="w-11/12 sm:w-7/12 lg:w-9/12 xl:w-9/12">
                                        <h2 className="text-lg md:text-2xl">
                                            The system of record for revenue
                                            across the entire customer lifecycle
                                        </h2>
                                    </div>
                                </div>

                                <div className="">
                                    <Link href="https://calendly.com/nue/nue-io-overview-conversation">
                                        <a
                                            target="_blank"
                                            className="cursor-pointer btn btn-big btn-primary"
                                        >
                                            Book a demo
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-20">
                        <div className="w-full lg:w-11/12 relative">
                            <FloatingImage
                                classes={`absolute z-30 bottom-4 right-0 lg:hidden transform translate-x-1`}
                                src={`/images/homepage/hero-graph.png`}
                                alt={`Homepage hero graph image`}
                                width={156}
                                height={91.5}
                            />

                            <FloatingImage
                                classes={`absolute z-30 bottom-4 bottom-2 left-0 lg:hidden`}
                                src={`/images/homepage/finance-clarity-today-arr.png`}
                                alt={`Finance clarity today's arr image`}
                                width={87}
                                height={87}
                            />

                            <FloatingImage
                                classes={`absolute z-30 left-0 -top-12 z-30 lg:hidden`}
                                src={`/images/homepage/squire-box.png`}
                                alt={`Squire box image`}
                                width={138.5}
                                height={57}
                            />

                            <FloatingImage
                                classes={`absolute z-30 right-0 -top-12 z-30 lg:hidden`}
                                src={`/images/homepage/ge-box.png`}
                                alt={`GE box image`}
                                width={143.5}
                                height={57}
                            />

                            <div className="relative z-20 transform -translate-y-10 md:-translate-y-20">
                                <motion.div
                                    animate={animationControlMain}
                                    variants={item}
                                    initial="hidden"
                                    className="flex justify-center h-full"
                                >
                                    <div
                                        className="w-full lg:w-10/12"
                                        style={{
                                            perspective: "600px",
                                        }}
                                    >
                                        <div
                                            className="relative shadow-xl h-full w-full"
                                            style={{
                                                transform: "rotateX(10deg)",
                                            }}
                                        >
                                            <Image
                                                src={`/images/homepage/hero-main-whole.png`}
                                                alt={`Homepage hero wrapper image`}
                                                width={`1977`}
                                                height={`1213`}
                                                layout="responsive"
                                                onLoad={() => {
                                                    animationControlMain.start(
                                                        "show"
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section bgColor="bg-gradient-to-br from-white via-red-50 to-red-50">
                <SectionFade />
                <div className="absolute z-0 left-0 top-0 transform translate-y-1/3 -translate-x-1/3">
                    <BlobRed1 />
                </div>
                <div className="absolute z-0 right-0 bottom-0 transform -translate-y-1/3 translate-x-1/3">
                    <BlobRed2 />
                </div>
                <div className="container relative">
                    <div className="lg:py-10"></div>
                    <div className="py-12 lg:py-20 ">
                        <div className="relative">
                            <div className="absolute top-0 xl:top-12 left-0 hidden lg:block">
                                <div className="transform -translate-x-80 xl:-translate-x-56">
                                    <FloatingImage
                                        classes={`text-right`}
                                        src={`/images/homepage/sales-velocity-primary-contact.png`}
                                        alt={`Sales velocity primary contact image`}
                                        width={566.5}
                                        height={280}
                                    />
                                    <div className="transform -translate-x-24">
                                        <FloatingImage
                                            classes={`text-right `}
                                            src={`/images/homepage/sales-velocity-classic.png`}
                                            alt={`Sales velocity primary contact image`}
                                            width={275}
                                            height={532}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 -right-12 xl:right-10 text-left hidden lg:block">
                                <FloatingImage
                                    classes={`text-right `}
                                    src={`/images/homepage/sales-velocity-simplistic.png`}
                                    alt={`Sales velocity primary contact image`}
                                    width={273}
                                    height={532}
                                />

                                <FloatingImage
                                    classes={`text-right `}
                                    src={`/images/homepage/sales-velocity-quote-price.png`}
                                    alt={`Sales velocity primary contact image`}
                                    width={251}
                                    height={202.81}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center ">
                            <div className="w-11/12 lg:w-6/12 xl:w-5/12">
                                <div className="text-center">
                                    <HeaderLabel>SALES VELOCITY</HeaderLabel>

                                    <div className="mb-6">
                                        <Header2>
                                            Close deals with innovative pricing
                                        </Header2>
                                    </div>

                                    <div className="">
                                        <HeaderP>
                                            Plug and play quoting and cart
                                            functionality for rapid fast deals
                                            regardless of pricing complexity –
                                            direct sales or self-service.
                                        </HeaderP>
                                        <HeaderP>
                                            Empower your reps to make the best
                                            pricing and discounting decisions,
                                            taking into account impact on
                                            revenue.
                                        </HeaderP>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <div className="w-full lg:w-7/12 ">
                                <FloatingImage
                                    classes={`text-right `}
                                    src={`/images/homepage/sales-velocity-tiered-pricing.png`}
                                    alt={`Sales velocity tiered pricing image`}
                                    width={788.5}
                                    height={363}
                                />

                                <div className="flex justify-start -mx-6 lg:hidden">
                                    <div className="w-1/3">
                                        <FloatingImage
                                            src={`/images/homepage/sales-velocity-classic-template.png`}
                                            alt={`Sales velocity classic template image`}
                                            width={`252.51`}
                                            height={`510`}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <FloatingImage
                                            src={`/images/homepage/sales-velocity-simplistic-template.png`}
                                            alt={`Sales velocirt simplistic template image image`}
                                            width={`252.51`}
                                            height={`510`}
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <FloatingImage
                                            src={`/images/homepage/sales-velocity-quote-price.png`}
                                            alt={`Sales velocity quote price image`}
                                            width={`251.`}
                                            height={`202.81`}
                                        />

                                        <FloatingImage
                                            src={`/images/homepage/sales-velocity-primary-contact.png`}
                                            alt={`Sales velocity primary contact image`}
                                            width={`566.5`}
                                            height={`280`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-12"></div>
                </div>
            </Section>
            <Section bgColor="bg-gradient-to-br from-white via-green-50 to-green-50">
                <SectionFade />

                <div className="absolute right-0 bottom-0 transform translate-y-1/3 translate-x-1/3">
                    <BlobGreen2 />
                </div>
                <div className="absolute z-0 left-0 top-0 transform translate-y-1/3 -translate-x-1/3">
                    <BlobGreen3 />
                </div>
                <div className="container relative">
                    <div className="lg:py-10"></div>
                    <div className="py-20 ">
                        <div className="relative">
                            <div className="absolute top-32 left-20 h-full flex items-center hidden lg:block">
                                <div className="transform -translate-x-32 xl:translate-x-0">
                                    <FloatingImage
                                        classes={`shadow-xl mb-12`}
                                        src={`/images/homepage/revops-agility-order.png`}
                                        alt={`Rev Ops agillity order image`}
                                        width={328}
                                        height={451}
                                        responsive={true}
                                    />

                                    <FloatingImage
                                        classes={`text-right`}
                                        src={`/images/homepage/revops-agility-change-order.png`}
                                        alt={`Rev Ops agility change order image`}
                                        width={274}
                                        height={185}
                                    />
                                </div>
                            </div>
                            <div className="absolute top-12 right-0 h-full flex items-center hidden lg:block">
                                <div className="transform translate-x-20 xl:-translate-x-12">
                                    <FloatingImage
                                        classes={``}
                                        src={`/images/homepage/revops-agility-profile.png`}
                                        alt={`Rev Ops agility Profile image`}
                                        width={342}
                                        height={464}
                                    />
                                    <FloatingImage
                                        classes={``}
                                        src={`/images/homepage/hero-graph.png`}
                                        alt={`Rev Ops agility Hero graph image`}
                                        width={312}
                                        height={183}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 lg:w-7/12 xl:w-5/12">
                                <div className="text-center">
                                    <HeaderLabel>rev ops agility</HeaderLabel>

                                    <div className="mb-6">
                                        <Header2>
                                            Manage dynamic customer lifecycles
                                        </Header2>
                                    </div>

                                    <div className="">
                                        <HeaderP>
                                            Ditch the spreadsheet and get your
                                            time back. Nue automatically
                                            calculates and recalculates order
                                            changes whether that be usage
                                            consumption, upsells, renewals, etc.
                                        </HeaderP>
                                        <HeaderP>
                                            Nue enables seamless handoffs to
                                            provisioning and your ERP.
                                        </HeaderP>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <div className="w-full lg:w-9/12 xl:w-7/12">
                                <FloatingImage
                                    classes={`text-center`}
                                    src={`/images/homepage/revops-agility-main.png`}
                                    alt={`Rev Ops agility Hero image`}
                                    width={599}
                                    height={478.88}
                                />
                                <div className="flex -mx-6 lg:hidden">
                                    <div className="w-6/12 ">
                                        <FloatingImage
                                            src={`/images/homepage/revops-agility-order.png`}
                                            alt={`RevOps agility order image`}
                                            width={`328`}
                                            height={`451`}
                                        />

                                        <FloatingImage
                                            src={`/images/homepage/revops-agility-change-order.png`}
                                            alt={`RevOps agility change order image`}
                                            width={`274`}
                                            height={`185`}
                                        />
                                    </div>
                                    <div className="w-6/12 ">
                                        <FloatingImage
                                            src={`/images/homepage/revops-agility-profile.png`}
                                            alt={`RevOps agility profile image`}
                                            width={`342`}
                                            height={`464`}
                                        />
                                        <FloatingImage
                                            src={`/images/homepage/hero-graph.png`}
                                            alt={`Homepage hero graph image`}
                                            width={`312`}
                                            height={`183`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-12"></div>
                </div>
            </Section>
            <Section bgColor="bg-gradient-to-br from-white via-indigo-50 to-indigo-50">
                <SectionFade />
                <div className="absolute z-0 right-0 top-0 transform -translate-y-1/3 translate-x-1/3">
                    <BlobPurple1 />
                </div>
                <div className="absolute z-0 left-0 bottom-0 transform translate-y-1/3 -translate-x-1/3">
                    <BlobPurple2 />
                </div>
                <div className="absolute z-0 left-0 right-0 bottom-0 w-full transform translate-y-1/4">
                    <WavePurple1 />
                </div>
                <div className="container relative z-20">
                    <div className="absolute top-12 lg:-left-12 xl:left-0 text-right hidden lg:block">
                        <div className="transform -translate-x-32">
                            <FloatingImage
                                classes={`mb-12`}
                                src={`/images/homepage/squire-box.png`}
                                alt={`Squire box image`}
                                width={277}
                                height={114}
                            />
                            <FloatingImage
                                classes={`transform mb-12 translate-x-12 text-center"`}
                                src={`/images/homepage/finance-clarity-today-arr.png`}
                                alt={`Squire box image`}
                                width={174}
                                height={174}
                            />

                            <FloatingImage
                                classes={``}
                                src={`/images/homepage/finance-clarity-new-quote.png`}
                                alt={`New quote image`}
                                width={372.5}
                                height={366.5}
                            />
                        </div>
                    </div>

                    <div className="absolute top-8 lg:-right-12 xl:right-3 text-left hidden lg:block">
                        <div className="transform translate-x-1/2">
                            <FloatingImage
                                classes={``}
                                src={`/images/homepage/ge-box.png`}
                                alt={`GE Box image`}
                                width={287}
                                height={114}
                            />

                            <FloatingImage
                                classes={``}
                                src={`/images/homepage/finance-clarity-arr-momentum.png`}
                                alt={`Arr momentum image`}
                                width={449}
                                height={332}
                            />

                            <FloatingImage
                                classes={``}
                                src={`/images/homepage/finance-clarity-columns.png`}
                                alt={`Finance clarity columns`}
                                width={361}
                                height={355.5}
                            />
                        </div>
                    </div>
                    <div className="py-12 lg:py-20 flex flex-col-reverse md:flex-col">
                        <div className="flex justify-center ">
                            <div className="w-full lg:w-8/12">
                                <FloatingImage
                                    classes={``}
                                    src={`/images/homepage/finance-clarity-main.png`}
                                    alt={`Finance clarity Main image`}
                                    width={1730}
                                    height={1102}
                                />

                                <div className="flex -mx-2 lg:hidden">
                                    <div className="w-6/12 px-2">
                                        <FloatingImage
                                            classes={``}
                                            src={`/images/homepage/squire-box.png`}
                                            alt={`Squire box image`}
                                            width={138.5}
                                            height={57}
                                        />

                                        <FloatingImage
                                            classes={``}
                                            src={`/images/homepage/finance-clarity-columns.png`}
                                            alt={`Finance clarity columns`}
                                            width={361}
                                            height={355.5}
                                        />

                                        <FloatingImage
                                            classes={`text-right`}
                                            src={`/images/homepage/ge-box.png`}
                                            alt={`GE Box image`}
                                            width={143.5}
                                            height={57}
                                        />
                                    </div>
                                    <div className="w-6/12 px-2">
                                        <FloatingImage
                                            classes={``}
                                            src={`/images/homepage/finance-clarity-arr-momentum.png`}
                                            alt={`Arr momentum image`}
                                            width={449}
                                            height={332}
                                        />

                                        <FloatingImage
                                            classes={`text-right`}
                                            src={`/images/homepage/finance-clarity-new-quote.png`}
                                            alt={`Finance clarity new quote image`}
                                            width={372.5}
                                            height={366.5}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center relative">
                            <div className="w-11/12 lg:w-9/12 xl:w-7/12">
                                <div className="text-center">
                                    <HeaderLabel>FINANCE CLARITY</HeaderLabel>

                                    <div className="mb-6">
                                        <Header2>
                                            Leverage clean ARR data from
                                            opportunity-to-cash
                                        </Header2>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="w-full lg:w-9/12">
                                            <HeaderP>
                                                No more cobbling together data.
                                                Sales and Finance can finally be
                                                friends with a single view of
                                                revenue data across the entire
                                                flow.
                                            </HeaderP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:py-12"></div>
                </div>
            </Section>
        </>
    );
}

export async function getStaticProps() {
    // console.log(API_URL);
    // Get homepage data from
    const res = await fetch(`${API_URL}/homepage`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1,
    };
}
