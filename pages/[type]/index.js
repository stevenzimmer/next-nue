import Head from "next/head";
import Header1 from "@/components/text/Header1";
import ResourceRows from "@/components/ResourceRows";
import ResourceFeaturedRow from "@/components/ResourceFeaturedRow";
import SectionFade from "@/components/SectionFade";
import ResourcesSecondaryMenu from "@/components/ResourcesSecondaryMenu";
// import { NEXT_URL } from "@/config/index";
import { revops } from "@/data/revops";
export default function Type({ data, revops }) {
    return (
        <>
            <Head>
                <title>{data.header} | RevOps Review</title>
            </Head>
            <div className="py-40 relative">
                <SectionFade />
                {data && (
                    <>
                        <div className="absolute top-0 right-0">
                            <svg
                                width="589"
                                height="314"
                                viewBox="0 0 589 314"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.2"
                                    d="M14.1038 -356.673C1.10504 -328.351 -5.91442 -269.598 10.0936 -220.904C54.7396 -85.121 138.679 41.0217 248.45 137.294C358.222 233.567 487.464 294.392 615.451 310.013C697.581 320.044 778.517 310.672 844.568 275.163C910.619 239.653 960.876 176.939 976.994 96.9228C991.517 25.0025 978.486 -56.2159 961.31 -135.189C941.747 -225.081 914.955 -318.762 856.62 -396.246C800.086 -471.338 719.278 -523.235 638.252 -555.698C510.644 -606.446 380.234 -614.248 266.831 -577.919C154.531 -541.494 50.6214 -436.282 14.1038 -356.673Z"
                                    fill={data.themes.color}
                                />
                            </svg>
                        </div>
                        <div className="absolute left-0 top-12 ">
                            <svg
                                width="1178"
                                height="1369"
                                viewBox="0 0 1178 1369"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.2"
                                    d="M-353.868 1030.49C-328.534 1080.32 -258.812 1160.7 -182.239 1202.15C31.2908 1317.72 266.213 1376.13 484.851 1368C703.49 1359.88 893.178 1285.69 1023.49 1157.33C1107.13 1074.97 1164.71 970.123 1175.77 850.276C1186.84 730.43 1149.23 595.326 1059.92 478.297C979.672 373.07 863.72 288.173 747.095 210.817C614.335 122.781 470.466 38.4181 320.332 10.3521C174.834 -16.8457 38.3511 12.4797 -73.2584 65.9667C-248.544 150.669 -370.862 291.439 -421.63 466.891C-471.325 641.19 -425.094 890.442 -353.868 1030.49Z"
                                    fill="url(#paint0_linear_1172_5175)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1172_5175"
                                        x1="744.949"
                                        y1="136.803"
                                        x2="681.957"
                                        y2="899.77"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0.0224787"
                                            stopColor={data.themes.color}
                                            stopOpacity="0.68"
                                        />
                                        <stop
                                            offset="0.76693"
                                            stopColor={data.themes.color}
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </>
                )}

                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="w-11/12 sm:w-full  xl:w-10/12">
                            <div className="mb-6">
                                <Header1>RevOps Review</Header1>
                            </div>
                            <ResourcesSecondaryMenu
                                menus={revops}
                                active={data.type}
                            />
                            {data && (
                                <>
                                    <ResourceFeaturedRow item={data.featured} />

                                    {data.rows.map((row, i) => {
                                        return (
                                            <ResourceRows row={row} key={i} />
                                        );
                                    })}

                                    <ResourceFeaturedRow
                                        item={data.footer}
                                        swap={true}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async (context) => {
    const { type } = context.params;
    // const res = await fetch(`${NEXT_URL}/api/${type}`);
    // const data = await res.json();

    const contentType = revops.find((revop) => revop.type === type);
    console.log("contentType", contentType);

    // const revopsRes = await fetch(`${NEXT_URL}/api/revops`);
    // const revopsData = await revopsRes.json();

    return {
        props: { data: contentType, revops },
    };
};

export const getStaticPaths = async (context) => {
    // console.log("paths", context);
    // const res = await fetch(`${NEXT_URL}/api/revops`);
    // const data = await res.json();

    const data = revops;

    // console.log("data", data);
    const paths = data.map((item) => {
        // console.log("paths item", item);
        return {
            params: { type: item.type.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};
