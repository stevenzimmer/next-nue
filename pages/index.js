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
                <title>The modern company website design showcase |</title>
                <meta
                    name="description"
                    content="The meta description for the modern design company"
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
                                    <Header1>
                                        Modern company homepage header
                                    </Header1>
                                </div>

                                <div className="mb-6 flex justify-center">
                                    <div className="w-11/12 sm:w-7/12 lg:w-9/12 xl:w-9/12">
                                        <h2 className="text-lg md:text-2xl">
                                            A website for showcasing modern web design trends
                                        </h2>
                                    </div>
                                </div>

                                <div className="">
                                    <Link href="#">
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

            <Section bgColor="bg-gradient-to-br from-green-100 via-white to-red-100">
                <SectionFade />
                <div className="container relative py-20 z-10">
                    <div className="flex justify-center">
                        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <div className="flex flex-wrap justify-center md:justify-start ">
                                    <div className="w-full md:w-5/12 lg:w-5/12 relative mb-6 md:mb-0">
                                        <div className=" flex items-center justify-center mx-auto  md:h-full w-48 relative overflow-auto ">
                                            <div className="blob-1 bg-purple-light bg-opacity-60">
                                                <Image
                                                    src={`/images/customers/headshots/sunilmadan.png`}
                                                    alt={`Sunil Madan headshot`}
                                                    width={785}
                                                    height={785}
                                                />
                                            </div>
                                            <div className="absolute z-0 -bottom-2 left-0 right-0  "></div>
                                            <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-white shadow flex items-center px-1">
                                                <Image
                                                    src={`/images/customers/logos/birdeye.png`}
                                                    alt={`Birdeye logo`}
                                                    width={376}
                                                    height={200}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-7/12 lg:w-7/12 md:px-2">
                                        <p className="text-black text-opacity-80 text-xl mb-6">
                                            “Avant-garde lowbrow divisionism monumentalism socialist realism scuola romana cubo-futurism, cobra realism lyrical abstraction”
                                        </p>
                                        <p className="text-black text-opacity-50 text-lg">
                                            Reference Name
                                        </p>
                                        <p className="text-black text-opacity-50 text-lg font-hntMedium">
                                            Reference title, and company name 
                                        </p>
                                    </div>
                                </div>
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
                                    <HeaderLabel>Section label 1</HeaderLabel>

                                    <div className="mb-6">
                                        <Header2>
                                        Painterly fluxus abstraction super 
                                        </Header2>
                                    </div>

                                    <div className="">
                                     
                                        <HeaderP>
                                        Immagine&poesia caravaggisti art deco scuola romana divisionism modernism photorealism, neoclassicism der blaue reiter fluxus russian futurism rayonism.
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
                                    <HeaderLabel>Section label 2</HeaderLabel>

                                    <div className="mb-6">
                                        <Header2>
                                        Video art cubo futurism super
                                        </Header2>
                                    </div>

                                    <div className="">
                                        <HeaderP>
                                        Neo-expressionism geometric abstraction neo-fauvism nonconformism neo-fauvism les nabis fauvism precisionism, russian futurism
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
                                    <HeaderLabel>Section Label 3</HeaderLabel>

                                    <div className="mb-6">
                                        <Header2>
                                        video game art multiculturalism
                                        </Header2>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="w-full lg:w-9/12">
                                            <HeaderP>
                                            Illusionism russian symbolism eclecticism jugendstil socialist realism land art, deformalism video game art multiculturalism.
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
