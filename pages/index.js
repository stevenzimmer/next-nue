import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderLabel from "../components/text/HeaderLabel";
import Header1 from "../components/text/Header1";
import Header2 from "../components/text/Header2";
import HeaderP from "../components/text/HeaderP";
import Section from "../components/Section";
import { API_URL } from "../config/index";

export default function Home({ data }) {
    const heroBlobs = [
        {
            backgroundColor: "#36b2e7",
            opacity: 0.1,

            background:
                "background: linear-gradient(184.66deg, #D5C5DF 3.77%, #C4EEF5 93.79%)",
            top: "-35%",
            right: "-20%",
            width: "1000px",
            // height: "1876px",
        },
        {
            opacity: 0.1,
            bottom: "-20%",
            left: "-10%",
            animationDuration: "200s",
            background:
                "linear-gradient(160.62deg, #A9D2D3 26.49%, #7CF4CC 67.25%, rgba(137, 189, 191, 0) 96.15%)",
        },
        {
            opacity: 0.2,
            bottom: "-20%",
            right: "-10%",
            animationDuration: "200s",
            background: "#FD309A",
            width: "500px",
        },
    ];
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>{data.metatitle}</title>
                <meta name="description" content={data.metadescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="">
                <Section
                    blobs={heroBlobs}
                    bgColor="bg-gradient-to-r from-white via-blue-50 to-red-50"
                >
                    <div className="absolute left-0 right-0 bottom-0 w-full bg-gradient-to-br from-transparent via-transparent to-blue-50 py-20"></div>
                    <div className="container relative ">
                        <div className="absolute z-10 top-80 right-0">
                            <Image
                                src={`/homepage/ge-box.png`}
                                alt={`GE box image`}
                                width={`287`}
                                height={`114`}
                            />
                        </div>

                        <div className="absolute z-10 top-48 left-0">
                            <Image
                                src={`/homepage/squire-box.png`}
                                alt={`Squire box image`}
                                width={`277`}
                                height={`114`}
                            />
                        </div>
                        <div className="absolute z-10 top-96 left-16 ">
                            <Image
                                src={`/homepage/hero-graph.png`}
                                alt={`Homepage hero graph image`}
                                width={`312`}
                                height={`183`}
                            />
                        </div>
                        <div className="flex justify-center pt-40">
                            <div className="lg:w-6/12">
                                <div className="text-center">
                                    <div className="mb-6">
                                        <Header1>{data.herotitle}</Header1>
                                    </div>

                                    <div className="mb-6">
                                        <h2 className="text-2xl">
                                            The system of record for ARR
                                        </h2>
                                    </div>

                                    <div className="">
                                        <Link href="book-a-demo">
                                            <button className="btn btn-primary">
                                                Book a demo
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <div className="lg:w-11/12">
                                <div className=" ">
                                    <Image
                                        src={`/homepage/hero-main.png`}
                                        alt={`Homepage hero image`}
                                        width={`2562`}
                                        height={`1554`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section bgColor="bg-gradient-to-br from-white via-blue-50 to-blue-50">
                    <div className="container relative">
                        <div className="absolute top-0 left-0 text-right flex items-center h-full">
                            <div className="transform -translate-x-32">
                                <div className="transform -translate-y-32 translate-x-12 text-center">
                                    <Image
                                        src={`/homepage/finance-clarity-today-arr.png`}
                                        alt={`GE box image`}
                                        width={`174`}
                                        height={`174`}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={`/homepage/finance-clarity-new-quote.png`}
                                        alt={`Arr Momentum image`}
                                        width={`372.5`}
                                        height={`366.5`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-8 right-3 text-left ">
                            <div className="transform translate-x-1/2">
                                <div className="">
                                    <Image
                                        src={`/homepage/ge-box.png`}
                                        alt={`GE box image`}
                                        width={`287`}
                                        height={`114`}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={`/homepage/finance-clarity-arr-momentum.png`}
                                        alt={`Arr Momentum image`}
                                        width={`449`}
                                        height={`332`}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={`/homepage/finance-clarity-columns.png`}
                                        alt={`Arr Momentum image`}
                                        width={`361`}
                                        height={`355.5`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-24">
                            <div className="flex justify-center ">
                                <div className="lg:w-8/12">
                                    <Image
                                        src={`/homepage/finance-clarity-main.png`}
                                        alt={`Finance clarity main image`}
                                        width={`1730`}
                                        height={`1102`}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center ">
                                <div className="lg:w-6/12">
                                    <div className="text-center">
                                        <HeaderLabel>
                                            FINANCE CLARITY
                                        </HeaderLabel>

                                        <div className="mb-6">
                                            <Header2>
                                                Leverage clean ARR data from
                                                opportunity-to-cash
                                            </Header2>
                                        </div>

                                        <div className="">
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
                </Section>
                <Section bgColor="bg-gradient-to-r from-white via-red-50 to-red-50">
                    <div className="container relative">
                        <div className="absolute  top-20 left-0 text-right">
                            <div className="transform -translate-x-56">
                                <div className="">
                                    <Image
                                        src={`/homepage/sales-velocity-primary-contact.png`}
                                        alt={`GE box image`}
                                        width={`566.5`}
                                        height={`280`}
                                    />
                                </div>
                                <div className="text-right transform -translate-x-24">
                                    <Image
                                        src={`/homepage/sales-velocity-classic-template.png`}
                                        alt={`Arr Momentum image`}
                                        width={`252.51`}
                                        height={`510`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-24 right-10 text-left">
                            <div className="">
                                <div className="">
                                    <Image
                                        src={`/homepage/sales-velocity-simplistic-template.png`}
                                        alt={`Arr Momentum image`}
                                        width={`252.51`}
                                        height={`510`}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={`/homepage/sales-velocity-quote-price.png`}
                                        alt={`GE box image`}
                                        width={`251.`}
                                        height={`202.81`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-20">
                            <div className="flex justify-center ">
                                <div className="lg:w-5/12">
                                    <div className="text-center">
                                        <HeaderLabel>
                                            SALES VELOCITY
                                        </HeaderLabel>

                                        <div className="mb-6">
                                            <Header2>
                                                Close deals with innovative
                                                pricing
                                            </Header2>
                                        </div>

                                        <div className="">
                                            <HeaderP>
                                                Plug and play quoting and cart
                                                functionality for rapid fast
                                                deals regardless of pricing
                                                complexity – direct sales or
                                                self-service.
                                            </HeaderP>
                                            <HeaderP>
                                                Empower your reps to make the
                                                best pricing and discounting
                                                decisions, taking into account
                                                impact on revenue.
                                            </HeaderP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center relative">
                                <div className="lg:w-7/12">
                                    <div className=" ">
                                        <Image
                                            src={`/homepage/sales-velocity-tiered-pricing.png`}
                                            alt={`Tiered pricing main image`}
                                            width={`788.5`}
                                            height={`363`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20"></div>
                </Section>
                <Section bgColor="bg-gradient-to-br from-white via-green-50 to-green-50">
                    <div className="container relative">
                        <div className="absolute top-0 left-0 h-full flex items-center">
                            <div className="">
                                <div className="mb-12">
                                    <Image
                                        className="shadow-xl "
                                        src={`/homepage/revops-agility-order.png`}
                                        alt={`GE box image`}
                                        width={`328`}
                                        height={`451`}
                                    />
                                </div>
                                <div className="text-right">
                                    <Image
                                        src={`/homepage/revops-agility-change-order.png`}
                                        alt={`Arr Momentum image`}
                                        width={`274`}
                                        height={`185`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 h-full flex items-center">
                            <div className="transform -translate-x-12">
                                <div className="">
                                    <Image
                                        src={`/homepage/revops-agility-profile.png`}
                                        alt={`Arr Momentum image`}
                                        width={`342`}
                                        height={`464`}
                                    />
                                </div>
                                <div className="">
                                    <Image
                                        src={`/homepage/hero-graph.png`}
                                        alt={`Homepage hero graph image`}
                                        width={`312`}
                                        height={`183`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-20">
                            <div className="flex justify-center">
                                <div className="lg:w-5/12">
                                    <div className="text-center">
                                        <HeaderLabel>
                                            rev ops agility
                                        </HeaderLabel>

                                        <div className="mb-6">
                                            <Header2>
                                                Manage dynamic customer
                                                lifecycles
                                            </Header2>
                                        </div>

                                        <div className="">
                                            <HeaderP>
                                                Ditch the spreadsheet and get
                                                your time back. Nue
                                                automatically calculates and
                                                recalculates order changes
                                                whether that be usage
                                                consumption, upsells, renewals,
                                                etc.
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
                                <div className="lg:w-7/12">
                                    <div className="text-center">
                                        <Image
                                            src={`/homepage/revops-agility-main.png`}
                                            alt={`Tiered pricing main image`}
                                            width={`599`}
                                            height={`478.88`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    // console.log("get static props");
    // Get homepage data from
    const res = await fetch(`${API_URL}/homepage`);
    const data = await res.json();
    return {
        props: { data },
        revalidate: 1,
    };
}
