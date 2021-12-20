import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import Header1 from "@/components/text/Header1";
import ResourceLabel from "@/components/ResourceLabel";
import ResourceRows from "@/components/ResourceRows";
import Image from "next/image";
import SectionFade from "@/components/SectionFade";
// import { NEXT_URL } from "@/config/index";
import { Content } from "@/components/Content";
import { revops } from "@/data/revops";

export default function TypeChild({ data, type }) {
    const [headings, setHeadings] = useState([]);
    useEffect(() => {
        const renderedHeadings = Array.prototype.slice.call(
            document.querySelector(".content").getElementsByTagName("h2")
        );

        renderedHeadings.map((heading) => {
            // console.dir(heading);
            let headerId = heading.innerText
                .toLowerCase()
                .replace(/[^A-Z0-9]/gi, "");
            heading.setAttribute("id", headerId);
        });

        // console.log(headings);
        const headingRendered = renderedHeadings.map((heading) => {
            return heading.innerText;
        });

        setHeadings(headingRendered);
    }, []);
    return (
        <>
            <Head>
                <title>
                    {data.title} | {type.header} | RevOps Review
                </title>
            </Head>
            <div className="py-28 relative">
                <SectionFade />
                {data && (
                    <>
                        <div className="absolute w-full top-0 left-0 right-0">
                            <svg
                                width="1440"
                                height="857"
                                viewBox="0 0 1440 857"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full"
                            >
                                <path
                                    opacity="0.2"
                                    d="M1403.47 -475.43C1568.34 -546.958 1768.2 -505.44 1847.52 -475.74C1956.39 -180.938 2173.89 426.703 2172.88 498.851C2171.62 589.035 1960.77 732.748 1479.85 841.056C1095.12 927.703 228.441 639.405 -156.807 484.425L-62.9746 -139.295C-69.8998 -17.615 32.9354 192.826 499.678 61.1534C1083.11 -103.437 1197.39 -386.019 1403.47 -475.43Z"
                                    fill="url(#paint0_linear_1225_9635)"
                                    className="w-full"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1225_9635"
                                        x1="244.825"
                                        y1="-295.077"
                                        x2="330.78"
                                        y2="1240.66"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0.24258"
                                            stopColor={type.themes.color}
                                        />
                                        <stop
                                            offset="0.556021"
                                            stopColor={type.themes.color}
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="absolute left-0 top-0">
                            <svg
                                width="547"
                                height="717"
                                viewBox="0 0 547 717"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M502.416 537.205C523.841 513.782 548.257 463.509 546.578 419.999C541.887 298.673 494.891 182.373 413.127 89.7527C331.362 -2.86783 219.567 -66.4429 95.6697 -90.7768C16.1657 -106.398 -67.8741 -105.119 -144.695 -79.9549C-221.516 -54.7905 -290.52 -4.73945 -330.359 63.175C-366.202 124.215 -377.127 195.631 -383.226 265.455C-390.156 344.932 -390.947 428.301 -355.277 500.311C-320.708 570.097 -254.908 621.853 -183.144 656.801C-70.0112 711.514 58.6312 729.283 183.242 707.408C306.773 685.357 442.214 603.044 502.416 537.205Z"
                                    fill="url(#paint0_linear_1175_5976)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1175_5976"
                                        x1="-387"
                                        y1="-278"
                                        x2="242.521"
                                        y2="766.411"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0.147475"
                                            stopColor={type.themes.color}
                                            stopOpacity="0.56"
                                        />
                                        <stop
                                            offset="0.750483"
                                            stopColor={type.themes.color}
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </>
                )}
                <div className="container relative z-10">
                    <div className="flex justify-center">
                        <div className="w-11/12 sm:w-full xl:w-10/12">
                            <div className="flex items-center mb-6">
                                <div>
                                    <Link href={`/${type.type}/`}>
                                        <a className="text-black text-opacity-70 text-sm text-indigo-300 hover:underline">
                                            {type.header}
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
                            <div className="">
                                <Image
                                    src="/images/revops/hero-1.jpg"
                                    width={1180}
                                    height={512}
                                />
                            </div>
                            <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-start py-6 -mx-6">
                                <div className="w-full lg:w-3/12 px-6">
                                    {data.sidebar && (
                                        <>
                                            <div className="mb-12 hidden lg:block">
                                                <p className="font-hntMedium text-lg mb-2">
                                                    Topic
                                                </p>
                                                <ResourceLabel>
                                                    {data.label}
                                                </ResourceLabel>
                                            </div>

                                            <div className="mb-12 hidden lg:block">
                                                <p className="font-hntMedium text-lg mb-2">
                                                    Table of Contents
                                                </p>
                                                <div className=" ">
                                                    {headings.map(
                                                        (heading, i) => {
                                                            return (
                                                                <ReactScrollLink
                                                                    key={i}
                                                                    to={`${heading
                                                                        .toLowerCase()
                                                                        .replace(
                                                                            /[^A-Z0-9]/gi,
                                                                            ""
                                                                        )}`}
                                                                    smooth={
                                                                        true
                                                                    }
                                                                    duration={
                                                                        200
                                                                    }
                                                                    className="text-sm text-grey-600 mb-2 last:mb-0 block hover:text-blue transition-colors duration-200 cursor-pointer"
                                                                >
                                                                    {heading}
                                                                </ReactScrollLink>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            {data.tags && (
                                                <>
                                                    <p className="font-hntMedium text-lg mb-2">
                                                        Related tags
                                                    </p>
                                                    <div className="flex flex-wrap justify-start -mx-1">
                                                        {data.tags.map(
                                                            (tag, i) => {
                                                                return (
                                                                    <div
                                                                        className=" px-1 mb-2"
                                                                        key={i}
                                                                    >
                                                                        <div className="bg-grey-100 p-2 rounded-lg text-sm text-grey-600">
                                                                            {
                                                                                tag
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="lg:w-7/12 px-6">
                                    {!data.sidebar && (
                                        <>
                                            {type.type === "podcast-video" && (
                                                <>
                                                    <div className="bg-grey-100 py-20 px-10 rounded-lg mb-6">
                                                        <p>
                                                            Podcast embedded
                                                            here
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            <ResourceLabel>
                                                {data.label}
                                            </ResourceLabel>
                                        </>
                                    )}
                                    <div className="lg:hidden">
                                        <ResourceLabel>
                                            {data.label}
                                        </ResourceLabel>
                                    </div>

                                    <div className="">
                                        <Header1>{data.title}</Header1>
                                    </div>
                                    <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-between py-6 border-b">
                                        <div className="flex items-center w-full lg:w-1/2 ">
                                            <div className="w-12">
                                                <div className="bg-black h-8 w-8 rounded-full "></div>
                                            </div>

                                            <div>
                                                <p>by Team of Nue</p>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 hidden">
                                            <div className="flex justify-between lg:justify-around">
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <Content>
                                        {type.type === "podcast-video" && (
                                            <Transcript />
                                        )}
                                        {type.type === "research" && (
                                            <ResearchBlob />
                                        )}
                                        {type.type === "articles" && (
                                            <ContentBlob />
                                        )}
                                    </Content>
                                </div>
                            </div>
                            {type.postFooters && (
                                <div className="py-12 border-t">
                                    {type.postFooters.map((row, i) => {
                                        return (
                                            <ResourceRows row={row} key={i} />
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async (context) => {
    const { type, slug } = context.params;

    // console.log("type", type);
    // console.log("slug", slug);

    // const res = await fetch(`${NEXT_URL}/api/${type}/${slug}`);
    // const data = await res.json();

    // const typeRes = await fetch(`${NEXT_URL}/api/${type}`);
    // const typeData = await typeRes.json();

    const contentType = revops.find((revop) => revop.type === type);
    console.log("contentType", contentType);

    const data = contentType.items.find((item) => item.slug === slug);

    return {
        props: { data, type: contentType },
    };
};

export const getStaticPaths = async (context) => {
    // console.log("revops", revops);
    // const res = await fetch(`${NEXT_URL}/api/revops`);
    // const data = await revops.json();
    const data = revops;

    const posts = data.map((post) => {
        return post.items.map((item) => {
            return {
                type: post.type,
                slug: item.slug,
            };
        });
    });

    let mergedArrays = [];
    posts.forEach((post) => {
        post.forEach((item) => {
            mergedArrays.push(item);
        });
    });

    return {
        paths: mergedArrays.map((post) => {
            return {
                params: post,
            };
        }),
        fallback: false,
    };
};

function ContentBlob() {
    return (
        <>
            <p className="mb-6">
                In recent years, companies like Slack and Zoom have emerged as
                shining examples of how to operate as a product-led company.
                Users cross a first milestone of product engagement via free
                trial, without any humans involved. Then the sheer stickiness of
                the product — combined with limitations of the free trial —
                compel the user into a paid subscription. Tada! The product sold
                itself (or so it seems). Most startup founders look at this
                process as the holy grail. But, as many entrepreneurs soon find
                out, this product-led approach is easier said than done. So, how
                can founders (without a ton of pain) rapidly determine when and
                if they need Sales in their customer’s journey to purchase?
            </p>
            <p className="mb-6">
                Travis Bryant, formerly Head of Sales at Front and SVP Global
                Sales at Optimizely (where he scaled revenue from $7m to $90m in
                ARR) joined us at a 1to100 breakfast to field founder questions
                and share his experiences building out Sales teams in
                product-led startups. For those figuring out their sales model,
                Travis identifies three aspects of go-to-market to think through
                in sequence — your Ideal Customer Profile (ICP) + sales model +
                sales economics.
            </p>
            <h2 className="mb-6">
                Ideal Customer Profile — Align your team to a well-defined ICP
            </h2>
            <p className="mb-6">
                For a while, Slack communicated that they didn’t have or need
                Sales. That was great marketing copy, but was not actually the
                case. Travis is quick to point out that Slack did, in fact, have
                people (whether they were called Sales or not) who worked to
                understand what people wanted and translated the value of Slack
                in their terms (whether the target audience was Sales, Computer
                Science, Account Management, etc.). “Slack’s momentum is
                evidence of what I think (from the outside) happens when you’re
                very very clear about your unique value in the market,” says
                Travis, “and you’re very clear about your target market so
                everyone is on the same page.”
            </p>
            <p className="mb-6">
                Travis recommends starting by identifying your Ideal Customer
                Profile (ICP) — the companies you care about and the actual
                people at those companies that you’re building your product to
                serve. According to Travis, identifying your ICP upfront cuts
                down on a ton of wasted energy arguing between major sides of
                your team. Why? The customer is put in the middle of the
                conversation as a neutral third party; this results in less
                debate about “what sales want” versus “what product wants” and
                are we “a sales company?” or “a product company?” At the end of
                the day, it’s really about being a “customer” company. With a
                well defined ICP, Product builds the right features, Marketing
                pays for the right keywords, Sales asks the right discovery
                questions, and Success does the right on-boarding, etc. As
                Travis puts it, “you’re not beholden to doing what a customer
                tells you to do…instead, you’re focused on understanding their
                deeper use cases, challenges, risks, desires and then building
                stuff they didn’t ask for.”
            </p>
            <h2 className="mb-6">
                Sales model — Let your ICP lead you to the right sales motion
            </h2>
            <p className="mb-6">
                Defining your ICP leads into the next consideration — is the
                product design itself capable of driving the initial
                conversation with your ideal customer? For companies like Slack
                and Zoom (both horizontal productivity tools), Travis points out
                that users can pretty quickly (via free trial) understand the
                value without having to be convinced “by a human doing
                thoughtful business process discovery, demonstrations, proof of
                concepts that leads to that first purchase.” By contrast,
                Optimizely is a business process solution (built for A/B website
                testing), which doesn’t really start delivering value by simply
                being dropped in — “there’s a whole bunch of knowledge that has
                to come along with it.” Yet, in Optimizely’s early days (around
                their Series A), their pricing page gave the connotation they
                were a product-led, SMB solution. When Travis dug into their
                customer base, he found a very different picture. Optimizely was
                actually serving quite a few large enterprise customers like
                CNN.com with a hundred million monthly visitors — “and of course
                they were not paying $399 a month.” Optimizely’s outward facing
                product positioning, pricing, and sales motion behind it had to
                be adjusted to fit this ICP.
            </p>
            <p className="mb-6">
                According to Travis, sorting out this sales model identity
                crisis created a lot of wasted energy (and potential revenue).
                The experience helped him outline some key steps to uncover the
                right sales model earlier. Start with the seemingly simple
                stupid question: do you have a hypothesis of what you are
                solving for? Who (think ICP) you are solving it for? For Travis,
                “the biggest fork in the road” is whether or not those people
                have to be reached by human-to-human connection. If yes, you’re
                onto your first experiment of being driven by Sales.
                Alternatively, if you can make the connection without human
                intervention, you’re starting down the path of being
                product-driven.
            </p>
            <h2 className="mb-6">
                Sales Economics — Does the math work with your ASP?
            </h2>
            <p className="mb-6">
                Once you land on an approach, there’s still one final question:
                do the economics of the process actually work with the price
                point of your product? A cautionary note for founders is to make
                sure they aren’t implementing too heavy of a sales process for
                an average deal size that’s too small. That’s especially true in
                today’s high cost environment. Per Travis’ point: “To try to
                scale a business by hiring AEs, especially if you’re based [in
                the Bay Area] is borderline insanity.” So, if you’re going to
                have AEs, make sure to tease out the right quota to OTE ratio to
                make them profitable. Travis also recommends looking beyond MQLs
                and closed deals to a close consideration of LTV: “ If your
                customer retention is high and you have zero logo churn you can
                afford more upfront [acquisition] cost (CAC).”
            </p>
        </>
    );
}

function ResearchBlob() {
    return (
        <>
            <p className="mb-6">
                MuleSoft is recognized as one the largest enterprise
                acquisitions in history — the integration platform was acquired
                by Salesforce in 2018 for $6.5 billion. It’s hard to believe,
                but this stellar company actually came from tough beginnings.
                According to CEO Greg Schott, when he joined in 2009, the
                company was a bit of a “fixer upper.” MuleSoft had just laid off
                nearly half of its staff, leaving just 20 people in the company.
                “We had about $1.5M in revenue and we were selling Mule as an
                open-source enterprise service bus (ESB) with an enterprise
                edition,” Greg describes. “It had the beginnings of a strong
                management team and a little bit of money in the bank that was
                going to last us about a year and a half.”
            </p>
            <p className="mb-6">
                So how exactly did an open-source tool called Mule (which btw,
                took the “donkey work” out of integration) become the MuleSoft
                it is today — all 6.5B dollars of it? I chatted with my good
                friend Greg about the company’s unlikely comeback at our 1to100
                conference. He was quick to point out that the integration space
                was one of those massive market opportunities available for the
                taking — “nobody had really figured out how to crack the nut on
                it.” He also identified three key drivers of MuleSoft’s rise: a
                product pivot, bigger enterprise deals, and forward-looking team
                construction.
            </p>
            <h2 className="mb-6">
                Product pivot — Build towards an ambitious thesis
            </h2>
            <p className="mb-6">
                To give a sense for the magnitude of the challenge, Greg says
                that there was “$700 billion in [integration] pain that we could
                address… it was the biggest unsolved IT problem of all time.”
                MuleSoft’s original vision was to solve integration issues with
                a flexible platform approach that eliminated the need to build
                specific software for every connectivity problem.
            </p>

            <div className="border bg-grey-50 p-6 rounded-lg">
                <div className="flex flex-wrap justify-start -mx-2 mb-4">
                    <div className="px-2 lg:w-1/2 mb-4">
                        <input
                            type="text"
                            className="w-full rounded-lg p-2 bg-white border"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="px-2 lg:w-1/2">
                        <input
                            type="text"
                            className="w-full rounded-lg p-2 bg-white border"
                            placeholder="Email"
                        />
                    </div>
                    <div className="px-2 lg:w-1/2">
                        <input
                            type="text"
                            className="w-full rounded-lg p-2 bg-white border"
                            placeholder="Company Name"
                        />
                    </div>
                </div>
                <div>
                    <a href="#" className="btn btn-indigo">
                        Download
                    </a>
                </div>
            </div>
        </>
    );
}

const dialogs = [
    {
        speaker: "A",
        text: "Vestibulum bibendum commodo dui gravida convallis. Nam lorem risus, feugiat eget vehicula at, posuere sed sem. Nam augue diam, blandit ac tincidunt fermentum, pharetra ut turpis. Aliquam cursus mollis ipsum. Nulla tristique ut lacus at aliquet.",
    },
    {
        speaker: "B",
        text: "Vestibulum bibendum commodo dui gravida convallis. Nam lorem risus, feugiat eget vehicula at, posuere sed sem. Nam augue diam.",
    },
    {
        speaker: "A",
        text: "Vestibulum bibendum commodo dui gravida convallis. Nam lorem risus, feugiat eget vehicula at, posuere sed sem. Nam augue diam, blandit ac tincidunt fermentum, pharetra ut turpis. Aliquam cursus mollis ipsum. Nulla tristique ut lacus at aliquet.",
    },
    {
        speaker: "A",
        text: "Vestibulum bibendum commodo dui gravida convallis. Nam lorem risus, feugiat eget vehicula at, posuere sed sem. Nam augue diam, blandit ac tincidunt fermentum, pharetra ut turpis. Aliquam cursus mollis ipsum. Nulla tristique ut lacus at aliquet.",
    },
];

function Transcript() {
    return (
        <>
            <h2 className="mb-6">Description</h2>
            <p className="mb-6">
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.
            </p>
            <h2 className="mb-6">Transcript</h2>
            <div className="border p-6 rounded bg-grey-50">
                {dialogs.map((dialog, i) => {
                    return (
                        <div
                            className="flex justify-between mb-6 last:mb-0"
                            key={i}
                        >
                            <div className="w-32">
                                <p className="font-hntMedium ">
                                    Speaker {dialog.speaker}:
                                </p>
                            </div>
                            <div className="w-full">
                                <p>{dialog.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
