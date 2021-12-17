import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header1 from "@/components/text/Header1";
import ResourceLabel from "@/components/ResourceLabel";
import ResourceRows from "@/components/ResourceRows";
import Image from "next/image";
import SectionFade from "@/components/SectionFade";

export default function TypeChild() {
    const router = useRouter();
    const { type, slug } = router.query;
    // console.log(type);
    // console.log(slug);
    const [content, setContent] = useState("");
    const [contentType, setContentType] = useState("");
    const fetchContent = async () => {
        const response = await fetch(`/api/${type}/${slug}`);
        const data = await response.json();
        setContent(data);
    };

    const fetchContentType = async () => {
        const response = await fetch(`/api/${type}`);
        const data = await response.json();
        setContentType(data);
    };
    useEffect(() => {
        fetchContent();
        fetchContentType();
        console.log("content type", contentType);
    }, [router.asPath]);
    const pageTheme = {
        "podcast-video": {
            stop1: "#67AAA2",
            stop2: "#81D4CA",
        },
        articles: {
            stop1: "#FBAE8A",
            stop2: "#FBAE8A",
        },
        research: {
            stop1: "#729CE4",
            stop2: "#3C68FF",
        },
    };
    return (
        <>
            <Head>
                <title>{content.title}</title>
            </Head>
            <div className="py-28 relative">
                <SectionFade />
                {contentType && (
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
                                            stopColor={
                                                pageTheme[contentType.type]
                                                    .stop1
                                            }
                                        />
                                        <stop
                                            offset="0.556021"
                                            stopColor={
                                                pageTheme[contentType.type]
                                                    .stop2
                                            }
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
                                            stopColor={
                                                pageTheme[contentType.type]
                                                    .stop1
                                            }
                                            stop-opacity="0.56"
                                        />
                                        <stop
                                            offset="0.750483"
                                            stopColor={
                                                pageTheme[contentType.type]
                                                    .stop2
                                            }
                                            stop-opacity="0"
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
                                    <Link href={`/${contentType.type}/`}>
                                        <a className="text-black text-opacity-70 text-sm text-indigo-300 hover:underline">
                                            {contentType.header}
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
                                        {content.title}
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
                            <div className="flex justify-start py-6 ">
                                <div className="lg:w-3/12">
                                    {content.sidebar && (
                                        <>
                                            <p className="font-hntMedium text-lg mb-2">
                                                Topic
                                            </p>
                                            <ResourceLabel>
                                                {content.label}
                                            </ResourceLabel>
                                        </>
                                    )}
                                </div>
                                <div className="lg:w-7/12">
                                    {!content.sidebar && (
                                        <>
                                            {contentType.type ===
                                                "podcast-video" && (
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
                                                {content.label}
                                            </ResourceLabel>
                                        </>
                                    )}

                                    <div className="">
                                        <Header1>{content.title}</Header1>
                                    </div>
                                    <div className="flex justify-between py-6 border-b">
                                        <div className="flex  items-center lg:w-1/2">
                                            <div className="w-12">
                                                <div className="bg-black h-8 w-8 rounded-full "></div>
                                            </div>

                                            <div>
                                                <p>by Team of Nue</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2">
                                            <div className="flex justify-around">
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                                <div className="bg-indigo-300 h-8 w-8 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6">
                                        {contentType.type ===
                                            "podcast-video" && <Transcript />}
                                        {contentType.type === "research" && (
                                            <ResearchBlob />
                                        )}
                                        {contentType.type === "articles" && (
                                            <ContentBlob />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {contentType.postFooters && (
                                <div className="py-12 border-t">
                                    {contentType.postFooters.map((row, i) => {
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

function ContentBlob() {
    return (
        <div className="content ">
            <p className="mb-6">
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.{" "}
                <a href="">Aliquam cursus mollis ipsum. Nulla</a>
                tristique ut lacus at aliquet. Mauris a sapien id libero commodo
                condimentum non eu diam. Integer sed tortor sagittis nibh
                iaculis euismod. Vivamus pharetra tortor orci, id lobortis
                sapien faucibus in. Duis eleifend nisi et augue consequat
                ultricies. Quisque tincidunt rhoncus risus sed ornare.
            </p>
            <p className="mb-6">
                {" "}
                Pellentesque nisi nisl, aliquam et velit nec, facilisis vehicula
                urna. Nulla pretium arcu scelerisque metus porttitor sodales.
                Proin rhoncus scelerisque sapien, id consequat mauris. Fusce
                eget pretium risus.
            </p>
            <h2 className="mb-6">H2 Title goes here</h2>
            <p className="mb-6">
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet.
            </p>
            <h3 className="mb-6">H3 Title goes here</h3>
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

function ResearchBlob() {
    return (
        <>
            <div className="content mb-6">
                <p className="mb-6">
                    Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                    risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                    diam, blandit ac tincidunt fermentum, pharetra ut turpis.{" "}
                    <a href="">Aliquam cursus mollis ipsum. Nulla</a>
                    tristique ut lacus at aliquet. Mauris a sapien id libero
                    commodo condimentum non eu diam. Integer sed tortor sagittis
                    nibh iaculis euismod. Vivamus pharetra tortor orci, id
                    lobortis sapien faucibus in. Duis eleifend nisi et augue
                    consequat ultricies. Quisque tincidunt rhoncus risus sed
                    ornare.
                </p>
                <p className="mb-6">
                    {" "}
                    Pellentesque nisi nisl, aliquam et velit nec, facilisis
                    vehicula urna. Nulla pretium arcu scelerisque metus
                    porttitor sodales. Proin rhoncus scelerisque sapien, id
                    consequat mauris. Fusce eget pretium risus.
                </p>
                <h2>Fill out to download research</h2>
            </div>
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
        <div className="content">
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
                {dialogs.map((dialog) => {
                    return (
                        <div className="flex justify-between mb-6 last:mb-0">
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
        </div>
    );
}
