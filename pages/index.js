import { motion, useAnimation } from "framer-motion";

// Next
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderLabel from "../components/text/HeaderLabel";
import Header1 from "../components/text/Header1";
import Header2 from "../components/text/Header2";
import HeaderP from "../components/text/HeaderP";
import Section from "../components/Section";
import FloatingImage from "../components/FloatingImage";
import SectionFade from "../components/SectionFade";

// Strapi API config
import { API_URL } from "../config/index";

const imageAnimations = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

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

const itemMain = {
    hidden: {
        opacity: 0,
        y: 200,
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
    const animationControlItem = useAnimation();

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>{data.metatitle}</title>
                <meta name="description" content={data.metadescription} />
                <link rel="icon" href="/favicon.png" />
                <link
                    href="/fonts/HelveticaNowText/index.css"
                    rel="stylesheet"
                />
            </Head>
            <Navbar />
            <main className="">
                <Section bgColor="bg-gradient-to-br from-green-50 via-indigo-50 to-red-50 ">
                    <SectionFade />
                    {/* <div className="absolute z-10 left-0 right-0 top-0 w-full bg-fade-b py-12"></div> */}
                    {/* <div className="absolute z-10 left-0 right-0 bottom-0 w-full bg-fade-t py-32"></div> */}
                    <div className="absolute z-0 top-0 right-0 transform -translate-y-3/4 translate-x-1/4 lg:-translate-y-1/2 lg:translate-x-1/2">
                        <svg
                            width="1066"
                            height="1121"
                            viewBox="0 0 1066 1121"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.2"
                                d="M550.494 8.29511C453.002 -13.3872 348.259 9.62544 263.222 62.0019C178.184 114.378 112.229 194.505 67.5086 283.769C-19.4427 457.633 -24.5071 673.871 67.9034 844.875C160.314 1015.88 352.794 1132.3 546.805 1120.08C662.034 1112.82 771.635 1063.39 865.078 995.573C945.774 937.002 1018.37 860.856 1048.78 765.872C1081.93 662.335 1061.12 548.53 1021.71 447.157C981.18 342.941 920.729 245.697 839.999 168.443C759.269 91.1889 658.068 32.2184 550.494 8.29511Z"
                                fill="url(#paint0_linear_663:1047)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1047"
                                    x1="201.726"
                                    y1="101.707"
                                    x2="707"
                                    y2="1054.54"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D5C5DF" />
                                    <stop offset="1" stopColor="#C4EEF5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute z-0 left-0 bottom-0 transform -translate-x-3/4 translate-y-1/2 md:translate-y-1/4 md:-translate-x-1/2">
                        <svg
                            width="1047"
                            height="1128"
                            viewBox="0 0 1047 1128"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.35"
                                d="M817.353 53.4539C787.355 27.5694 722.97 -1.92967 667.247 0.0991162C511.863 5.76625 362.918 62.5446 244.298 161.328C125.678 260.112 44.2574 395.177 13.0929 544.864C-6.91332 640.916 -5.2758 742.449 26.9525 835.26C59.1808 928.071 123.281 1011.44 210.26 1059.57C288.434 1102.87 379.897 1116.07 469.32 1123.44C571.108 1131.81 677.879 1132.77 770.102 1089.67C859.477 1047.91 925.761 968.414 970.52 881.712C1040.59 745.031 1063.35 589.612 1035.33 439.063C1007.09 289.819 901.673 126.187 817.353 53.4539Z"
                                fill="url(#paint0_linear_663:1049)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1049"
                                    x1="523.5"
                                    y1="0"
                                    x2="943.5"
                                    y2="1108.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.162122"
                                        stopColor="#A9D2D3"
                                    />
                                    <stop
                                        offset="0.652369"
                                        stopColor="#7CF4CC"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#89BDBF"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute z-0 right-0 bottom-0 transform translate-x-3/4 translate-y-1/3 md:translate-y-1/3 md:translate-x-1/3">
                        <svg
                            width="912"
                            height="850"
                            viewBox="0 0 912 850"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.2"
                                d="M59.7866 622.453C-7.32434 526.937 -16.0058 382.508 26.2651 269.723C45.8648 217.393 75.956 169.625 114.69 129.353C153.424 89.0815 199.983 57.1561 251.507 35.5383C347.733 -4.31478 452.679 -5.71293 554.022 11.3141C644.091 26.5029 735.505 57.6687 806.956 127.446C878.408 197.223 926.008 312.118 907.767 420.428C885.649 551.642 781.274 631.867 686.104 697.204C579.278 770.555 466.957 845.911 343.662 849.089C220.366 852.266 133.681 727.597 59.7866 622.453Z"
                                fill="#FD309A"
                            />
                        </svg>
                    </div>
                    <motion.div
                        variants={imageAnimations}
                        animate={animationControlItem}
                        className="container relative"
                    >
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
                            <div className="w-11/12 lg:w-7/12 xl:w-6/12">
                                <div className="text-center relative z-20">
                                    <div className="mb-6">
                                        <Header1>{data.herotitle}</Header1>
                                    </div>

                                    <div className="mb-6">
                                        <h2 className="text-xl md:text-2xl">
                                            The system of record for ARR
                                        </h2>
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
                                                    src={`/images/homepage/hero-main-wrapper.png`}
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
                                                <div className="absolute flex justify-end items-center xl:items-end h-full right-0 top-0 sm:pt-4 sm:pr-6 sm:pl-4 sm:pb-0  md:pt-12 md:pl-6 md:pr-6 md:pb-4 lg:pb-6 lg:pr-6 lg:pl-36 xl:pb-10 xl:pr-6 xl:pl-44 xl:pt-0">
                                                    <div className="w-10/12 lg:w-full">
                                                        <Image
                                                            src={`/images/homepage/hero-main-inner.png`}
                                                            alt={`Homepage hero inner image`}
                                                            width={`1542`}
                                                            height={`931`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Section>
                <Section bgColor="bg-gradient-to-br from-white via-indigo-50 to-indigo-50">
                    <SectionFade />
                    <div className="absolute z-0 right-0 top-0 transform -translate-y-1/3 translate-x-1/3">
                        <svg
                            width="1227"
                            height="1143"
                            viewBox="0 0 1227 1143"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.5"
                                d="M80.0896 837.148C-10.2615 708.554 -21.9493 514.111 34.9598 362.269C61.3468 291.818 101.858 227.508 154.006 173.29C206.153 119.072 268.835 76.0912 338.202 46.9873C467.75 -6.66672 609.038 -8.54905 745.476 14.3743C866.735 34.8229 989.805 76.7813 1086 170.722C1182.19 264.662 1246.28 419.345 1221.72 565.162C1191.94 741.814 1051.42 849.821 923.298 937.784C779.479 1036.54 628.261 1137.99 462.269 1142.27C296.277 1146.54 179.573 978.702 80.0896 837.148Z"
                                fill="url(#paint0_linear_663:1070)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1070"
                                    x1="-345.5"
                                    y1="-21"
                                    x2="263.334"
                                    y2="1138.3"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white" stopOpacity="0" />
                                    <stop
                                        offset="0.448049"
                                        stopColor="#3C68FF"
                                        stopOpacity="0.16"
                                    />
                                    <stop
                                        offset="0.666054"
                                        stopColor="#89BDBF"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute z-0 left-0 bottom-0 transform translate-y-1/3 -translate-x-1/3">
                        <svg
                            width="934"
                            height="818"
                            viewBox="0 0 934 818"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M889.416 638.205C910.841 614.782 935.257 564.509 933.578 520.999C928.887 399.673 881.891 283.373 800.127 190.753C718.362 98.1322 606.567 34.5571 482.67 10.2232C403.166 -5.39805 319.126 -4.11944 242.305 21.0451C165.484 46.2095 96.48 96.2606 56.6412 164.175C20.7978 225.215 9.87305 296.631 3.77369 366.455C-3.15563 445.932 -3.94702 529.301 31.7226 601.311C66.2921 671.097 132.092 722.853 203.856 757.801C316.989 812.514 445.631 830.283 570.242 808.408C693.773 786.357 829.214 704.044 889.416 638.205Z"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="2.47436e-05"
                                    y1="-177"
                                    x2="629.521"
                                    y2="867.411"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.498858"
                                        stopColor="#3C68FF"
                                        stopOpacity="0.12"
                                    />
                                    <stop
                                        offset="0.750483"
                                        stopColor="#89BDBF"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute z-0 left-0 right-0 bottom-0 w-full transform translate-y-1/4">
                        <svg
                            width="2324"
                            height="1397"
                            viewBox="0 0 2324 1397"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.2"
                                d="M1386.47 40.5705C1551.34 -30.9581 1751.2 10.5596 1830.52 40.2596C1939.39 335.062 2156.89 942.703 2155.88 1014.85C2154.62 1105.04 1943.77 1248.75 1462.85 1357.06C1078.12 1443.7 211.441 1155.41 -173.807 1000.43L-79.9746 376.705C-86.8998 498.385 15.9354 708.826 482.678 577.153C1066.11 412.563 1180.39 129.981 1386.47 40.5705Z"
                                fill="url(#paint0_linear_663:1071)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1071"
                                    x1="227.825"
                                    y1="220.923"
                                    x2="313.78"
                                    y2="1756.66"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.24258"
                                        stopColor="#3C68FF"
                                    />
                                    <stop
                                        offset="0.556021"
                                        stopColor="#6338EB"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
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
                                        <HeaderLabel>
                                            FINANCE CLARITY
                                        </HeaderLabel>

                                        <div className="mb-6">
                                            <Header2>
                                                Leverage clean ARR data from
                                                opportunity-to-cash
                                            </Header2>
                                        </div>

                                        <div className="flex justify-center">
                                            <div className="w-full lg:w-9/12">
                                                <HeaderP>
                                                    No more cobbling together
                                                    data. Sales and Finance can
                                                    finally be friends with a
                                                    single view of revenue data
                                                    across the entire flow.
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
                <Section
                    // blobs={sectionBlobs2}
                    bgColor="bg-gradient-to-br from-white via-red-50 to-red-50"
                >
                    <SectionFade />
                    {/* <div className="absolute z-10 left-0 right-0 top-0 w-full bg-fade-b py-20"></div> */}
                    {/* <div className="absolute z-10 left-0 right-0 bottom-0 w-full bg-fade-t py-20"></div> */}
                    <div className="absolute z-0 left-0 top-0 transform translate-y-1/3 -translate-x-1/3">
                        <svg
                            width="1155"
                            height="1036"
                            viewBox="0 0 1155 1036"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.2"
                                d="M67.5079 771.736C-13.2757 658.507 -18.1586 483.384 40.0146 344.562C66.9892 280.153 107.03 220.843 157.677 170.278C208.323 119.713 268.507 78.9594 334.531 50.5207C457.814 -1.95918 590.496 -8.08182 717.849 8.33491C831.031 22.9934 945.239 57.0082 1032.59 138.779C1119.95 220.55 1175.26 358.148 1147.64 490.519C1114.16 650.883 978.875 752.76 855.852 836.16C717.761 929.788 572.641 1026.09 416.695 1035.14C260.75 1044.2 156.458 896.375 67.5079 771.736Z"
                                fill="url(#paint0_linear_663:1064)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1064"
                                    x1="1002.75"
                                    y1="-164.462"
                                    x2="196.5"
                                    y2="1125.04"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.0413587"
                                        stopColor="#FBF0F2"
                                        stopOpacity="0.43"
                                    />
                                    <stop
                                        offset="0.381096"
                                        stopColor="#D489B0"
                                        stopOpacity="0.89"
                                    />
                                    <stop
                                        offset="0.840834"
                                        stopColor="#D489B0"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute z-0 right-0 bottom-0 transform -translate-y-1/3 translate-x-1/3">
                        <svg
                            width="695"
                            height="624"
                            viewBox="0 0 695 624"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.2"
                                d="M40.8671 464.711C-7.72345 396.605 -10.6605 291.27 24.3301 207.77C40.5551 169.028 64.6391 133.355 95.1027 102.94C125.566 72.5255 161.766 48.0126 201.479 30.907C275.632 -0.659155 355.44 -4.34188 432.041 5.53263C500.119 14.3496 568.814 34.8092 621.357 83.9937C673.899 133.178 707.168 215.942 690.556 295.562C670.417 392.019 589.046 453.297 515.049 503.461C431.988 559.778 344.7 617.7 250.9 623.148C157.1 628.596 94.3698 539.68 40.8671 464.711Z"
                                fill="url(#paint0_linear_663:1065)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1065"
                                    x1="400.06"
                                    y1="10.5845"
                                    x2="109.488"
                                    y2="663.066"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.0413587"
                                        stopColor="white"
                                    />
                                    <stop
                                        offset="0.228603"
                                        stopColor="#D489B0"
                                    />
                                    <stop
                                        offset="0.840834"
                                        stopColor="#D489B0"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="container relative">
                        <div className="lg:py-20"></div>
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
                                            <div className="">
                                                <Image
                                                    src={`/images/homepage/sales-velocity-classic-template.png`}
                                                    alt={`Arr Momentum image`}
                                                    width={`252.51`}
                                                    height={`510`}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="">
                                                <Image
                                                    src={`/images/homepage/sales-velocity-simplistic-template.png`}
                                                    alt={`Arr Momentum image`}
                                                    width={`252.51`}
                                                    height={`510`}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <div className="">
                                                <Image
                                                    src={`/images/homepage/sales-velocity-quote-price.png`}
                                                    alt={`GE box image`}
                                                    width={`251.`}
                                                    height={`202.81`}
                                                />
                                            </div>
                                            <div className="">
                                                <Image
                                                    src={`/images/homepage/sales-velocity-primary-contact.png`}
                                                    alt={`GE box image`}
                                                    width={`566.5`}
                                                    height={`280`}
                                                />
                                            </div>
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
                    <div className="absolute z-0 bottom-0 right-0 left-0 w-full hidden ">
                        <svg
                            width="1440"
                            height="942"
                            viewBox="0 0 1440 942"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_f_665:3099)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M-210.998 818.253L-10.9401 143.802L406.303 122.809C561.009 64.4726 736.802 51.9937 883.588 98.7946L939.098 96.0016L932.798 117.241C984.143 139.61 1026.32 168.661 1058.82 202.49L1563.3 161.836L1318.76 447.054L1437.65 521.324L1108.59 784.05L1057.3 752.004L1014.56 801.852L951.014 715.596C764.54 858.372 483.091 913.82 268.962 838.453C237.324 827.317 208.66 813.855 183.066 798.426L-210.998 818.253Z"
                                    fill="url(#paint0_linear_665:3099)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_665:3099"
                                    x="-280.508"
                                    y="0.686493"
                                    width="1913.32"
                                    height="940.965"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="34.7549"
                                        result="effect1_foregroundBlur_665:3099"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_665:3099"
                                    x1="600.237"
                                    y1="239.445"
                                    x2="1289.16"
                                    y2="830.12"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#81D4CA" />
                                    <stop
                                        offset="1"
                                        stopColor="#18413E"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute right-0 bottom-0 transform translate-y-1/3 translate-x-1/3">
                        <svg
                            width="1342"
                            height="820"
                            viewBox="0 0 1342 820"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.35"
                                d="M1331.03 270.618C1345.2 239.776 1348.11 187.559 1321.55 157.155C1247.49 72.3793 1122.31 18.6685 966.097 4.63638C809.882 -9.39577 631.682 17.0637 460.074 79.7714C349.951 120.006 243.528 175.413 159.713 243.429C75.8982 311.445 16.0146 392.406 3.33685 467.39C-8.10508 534.807 18.0443 593.581 49.451 648.073C85.2174 710.091 130.993 770.947 216.876 799.944C300.11 828.044 413.039 822.848 524.141 801.621C699.074 767.879 873.047 697.343 1019.63 600.727C1164.75 504.683 1291.22 357.301 1331.03 270.618Z"
                                fill="url(#paint0_linear_663:1058)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1058"
                                    x1="779.497"
                                    y1="-146.706"
                                    x2="518.151"
                                    y2="704.386"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#27696B" />
                                    <stop
                                        offset="0.638619"
                                        stopColor="#89BDBF"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute z-0 left-0 top-0 transform translate-y-1/3 -translate-x-1/3">
                        <svg
                            width="1440"
                            height="849"
                            viewBox="0 0 1440 849"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.35"
                                d="M1359.22 663.616C1401.75 639.371 1450.26 587.283 1447.01 542.151C1437.93 416.3 1344.95 295.567 1182.98 199.314C1021.01 103.061 799.44 36.8657 553.8 11.3433C396.174 -5.04095 229.523 -3.90704 77.1437 22.0178C-75.236 47.9426 -212.16 99.6976 -291.283 170.047C-362.471 233.275 -384.264 307.324 -396.487 379.73C-410.372 462.148 -412.094 548.617 -341.493 623.387C-273.07 695.848 -142.686 749.679 -0.443928 786.092C223.796 843.099 478.857 861.823 725.996 839.42C970.995 816.831 1239.72 731.766 1359.22 663.616Z"
                                fill="url(#paint0_linear_663:1059)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_663:1059"
                                    x1="298.349"
                                    y1="-210.618"
                                    x2="1052.55"
                                    y2="577.339"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#4E837C" />
                                    <stop
                                        offset="0.695072"
                                        stopColor="#81D4CA"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="container relative">
                        <div className="lg:py-20"></div>
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
                                            <div>
                                                <Image
                                                    src={`/images/homepage/revops-agility-order.png`}
                                                    alt={`GE box image`}
                                                    width={`328`}
                                                    height={`451`}
                                                />
                                            </div>
                                            <div className="">
                                                <Image
                                                    src={`/images/homepage/revops-agility-change-order.png`}
                                                    alt={`Arr Momentum image`}
                                                    width={`274`}
                                                    height={`185`}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-6/12 ">
                                            <div>
                                                <Image
                                                    src={`/images/homepage/revops-agility-profile.png`}
                                                    alt={`Arr Momentum image`}
                                                    width={`342`}
                                                    height={`464`}
                                                />
                                            </div>
                                            <div className="text-right">
                                                <Image
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
                        </div>
                        <div className="lg:py-12"></div>
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
