import { motion, useAnimation } from "framer-motion";

// Next
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Components
import HeaderLabel from "@/components/text/HeaderLabel";
import Header1 from "@/components/text/Header1";
import Header2 from "@/components/text/Header2";
import Header3 from "@/components/text/Header3";
import HeaderP from "@/components/text/HeaderP";
import Section from "@/components/Section";
import FloatingImage from "@/components/FloatingImage";
import SectionFade from "@/components/SectionFade";

// Blobs
import ProductHeroBlob from "@/components/blobs/ProductHero";
import BlobPurple3 from "@/components/blobs/Purple3";
import BlobRed4 from "@/components/blobs/Red4";
import BlobPink2 from "@/components/blobs/Pink2";
import BlobGreen4 from "@/components/blobs/Green4";

export default function Product() {
    return (
        <>
            <Head>
                <title>Unify your end-to-end ARR journey</title>
                <meta
                    name="description"
                    content="Operationalize your revenue stream across teams and grow revenue with a fully integrated suite of monetization apps
"
                />
            </Head>
            <div className="bg-gradient-to-br from-indigo-50 via-red-50 to-green-50 relative overflow-hidden ">
                <div className="absolute z-10 left-0 right-0 top-0 w-full bg-fade-b py-20"></div>

                <div className="absolute w-full h-full -top-32 left-0 right-0">
                    <ProductHeroBlob />
                </div>
                <div className="absolute left-0 top-1/4 tranform -translate-y-1/3">
                    <BlobPurple3 />
                </div>
                <div className="absolute right-0 top-1/4 transform translate-x-96">
                    <BlobRed4 />
                </div>
                <div className="absolute left-0 top-1/3  ">
                    <BlobPink2 />
                </div>
                <div className="absolute right-0 top-2/3  ">
                    <BlobGreen4 />
                </div>
                <Section>
                    <div className="container relative">
                        <div className="flex justify-center pt-32 lg:pt-40">
                            <div className="w-11/12 lg:w-7/12 xl:w-5/12">
                                <div className="text-center relative z-20">
                                    <div className="mb-6">
                                        <Header1>
                                            Unify your end-to-end ARR journey
                                        </Header1>
                                    </div>

                                    <div className="mb-6 flex justify-center">
                                        <div className="w-11/12 sm:w-7/12 lg:w-full ">
                                            <h2 className="text-lg md:text-2xl">
                                                Operationalize your revenue
                                                stream across teams and grow
                                                revenue with a fully integrated
                                                suite of monetization apps
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" h-96 bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 rounded-lg shadow-lg "></div>
                    </div>
                </Section>
                <Section>
                    {/* <SectionFade /> */}

                    <div className="container relative">
                        <div className="flex justify-center py-20">
                            <div className="w-full lg:w-11/12 relative">
                                <div className="flex flex-wrap items-center">
                                    <div className="lg:w-6/12 px-6">
                                        <FloatingImage
                                            classes={``}
                                            src={`/images/product/sales-led-image.png`}
                                            alt={`Sales led monetization section graphic`}
                                            width={625}
                                            height={657}
                                        />
                                    </div>
                                    <div className="lg:w-6/12 px-6 py-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 rounded-lg shadow-lg">
                                        <HeaderLabel>
                                            FOR SALES &amp; CUSTOMER SUCCESS
                                        </HeaderLabel>
                                        <div className="mb-6">
                                            <Header3>
                                                Sales-led monetization
                                            </Header3>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Launch a plug and play Deal Desk
                                                function.
                                            </HeaderP>
                                            <HeaderP>
                                                Approvals workflows and
                                                real-time revenue projections –
                                                TCV, ARR, MRR – for rapid fast
                                                finance
                                            </HeaderP>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Accelerate Sales with a
                                                consumer-like experience for
                                                quotes and orders
                                            </HeaderP>
                                            <HeaderP>
                                                (built for sales by sales
                                                people) with real-time discount
                                                recalculations.
                                            </HeaderP>
                                        </div>
                                        <div className="">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Manage order changes and
                                                co-terminations with an
                                                industry-first tool
                                            </HeaderP>
                                            <HeaderP>
                                                Automate renewals, upgrades and
                                                change recalculations. Coterm
                                                subscriptions on renewal or
                                                upsell. Reduce errors and manual
                                                effort.
                                            </HeaderP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    {/* <SectionFade /> */}
                    <div className="container relative">
                        <div className="flex justify-center py-20">
                            <div className="w-full lg:w-11/12 relative">
                                <div className="flex flex-wrap flex-row-reverse items-center">
                                    <div className="lg:w-6/12 px-6">
                                        <FloatingImage
                                            classes={``}
                                            src={`/images/product/revops-image-2.png`}
                                            alt={`Grow revenue instead of
                                            integrating it section graphic`}
                                            width={603}
                                            height={706}
                                        />
                                    </div>
                                    <div className="lg:w-6/12 px-6 py-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 rounded-lg shadow-lg">
                                        <HeaderLabel>
                                            FOR REVENUE OPERATIONS
                                        </HeaderLabel>
                                        <div className="mb-6">
                                            <Header3>
                                                Grow revenue instead of
                                                integrating it
                                            </Header3>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Configure sophisticated pricing
                                                and product bundling with a
                                                business-user friendly tool
                                            </HeaderP>
                                            <HeaderP>
                                                No more heavy CPQ. Launch on B2B
                                                AND B2-any channels without IT
                                                intervention.
                                            </HeaderP>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Get coherent analytics from
                                                pipeline to revenue recognition
                                            </HeaderP>
                                            <HeaderP>
                                                Nue’s complete data model
                                                end-to-end delivers real-time
                                                revenue analytics without
                                                IT/customization or a massive
                                                data collection exercise. Slice
                                                and dice by any data attribute
                                                from quote, order, renewal to
                                                upsell. Know which rep, region,
                                                bundle and discount has the best
                                                performance.
                                            </HeaderP>
                                        </div>
                                        <div className="">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Streamline accurate product
                                                provisioning
                                            </HeaderP>
                                            <HeaderP>
                                                Nue’s complete change data
                                                includes order assets and
                                                entitlements so that orders
                                                coming from CRM and self-service
                                                have all the details to be
                                                provisioned.
                                            </HeaderP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    {/* <SectionFade /> */}
                    <div className="container relative">
                        <div className="flex justify-center py-20">
                            <div className="w-full lg:w-11/12 relative">
                                <div className="flex flex-wrap items-center">
                                    <div className="lg:w-6/12 px-6">
                                        <FloatingImage
                                            classes={``}
                                            src={`/images/product/finance-img.png`}
                                            alt={`Finansure accurate billing and
                                            collections section graphic`}
                                            width={586}
                                            height={841}
                                        />
                                    </div>
                                    <div className="lg:w-6/12 px-6 py-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 rounded-lg shadow-lg">
                                        <HeaderLabel>FOR FINANCE</HeaderLabel>
                                        <div className="mb-6">
                                            <Header3>
                                                Ensure accurate billing and
                                                collections
                                            </Header3>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Bridge Sales, Operations and
                                                Finance data
                                            </HeaderP>
                                            <HeaderP>
                                                Nue brings together the best of
                                                CRM and ERP data attributes for
                                                a seamless end-to-end flow
                                                between the two systems and
                                                provisioning. Get the most out
                                                of your ERP investment.
                                            </HeaderP>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Monitor sales discounting with
                                                real-time revenue details
                                            </HeaderP>
                                            <HeaderP>
                                                Nue delivers real-time revenue
                                                projections at the quoting stage
                                                - TCV, ARR, MRR for rapid fast
                                                Finance thumbs up.
                                            </HeaderP>
                                        </div>
                                        <div className="">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Invoice in your ERP
                                            </HeaderP>
                                            <HeaderP>
                                                Nue’s complete data model passes
                                                complete order data to ERP for
                                                accurate, clean invoices without
                                                manual intervention.
                                            </HeaderP>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    {/* <SectionFade /> */}
                    <div className="container relative">
                        <div className="flex justify-center py-20">
                            <div className="w-full lg:w-11/12 relative">
                                <div className="flex flex-wrap flex-row-reverse items-center">
                                    <div className="lg:w-6/12 px-6">
                                        <FloatingImage
                                            classes={``}
                                            src={`/images/product/customers-img.png`}
                                            alt={`Customer-led revenue growth graphic`}
                                            width={704}
                                            height={431}
                                        />
                                    </div>
                                    <div className="lg:w-6/12 px-6 py-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-white bg-opacity-20 rounded-lg shadow-lg">
                                        <HeaderLabel>FOR CUSTOMERS</HeaderLabel>
                                        <div className="mb-6">
                                            <Header3>
                                                Customer-led revenue growth
                                            </Header3>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Plug and play UI components for
                                                website sales
                                            </HeaderP>
                                            <HeaderP>
                                                Create dynamic pricing pages
                                                controlled with the latest
                                                pricing adjustment in Nue. Spin
                                                up customer cart flows with
                                                commerce orders that sync
                                                directly to CRM and ERP for one
                                                source of revenue trut
                                            </HeaderP>
                                        </div>
                                        <div className="mb-6">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Give customers self-service
                                                order management
                                            </HeaderP>
                                            <HeaderP>
                                                Let customers the ability to
                                                manage their own renewals, see
                                                their usage, add users, add
                                                quantity, and more. No more back
                                                and forth with sales or support
                                                for subscription and other order
                                                changes.
                                            </HeaderP>
                                        </div>
                                        <div className="">
                                            <HeaderP classes="font-hntMedium mb-2">
                                                Trigger offers and promotions
                                                based on customer behavior
                                            </HeaderP>
                                            <HeaderP>
                                                Expand customer accounts by
                                                Incorporating product usage into
                                                your order profiles to reduce
                                                churn and deploy targeted
                                                upsells.
                                            </HeaderP>
                                        </div>
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
