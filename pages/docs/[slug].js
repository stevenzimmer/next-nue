// Next imports
import Link from "next/link";
import Head from "next/head";

// Components
import DocsHeader from "@/components/docs/Header";
import DocsBackground from "@/components/docs/Background";
import DocsSidebar from "@/components/docs/Sidebar";
import DocsBodyMain from "@/components/docs/BodyMain";
import { Content } from "@/components/Content";

// Data
import { docs, docsCategories } from "@/data/docs";

export default function DocsChild({ data }) {
    const categories = docsCategories.find(
        (category) => category.id === data.categoryID
    );

    return (
        <>
            <Head>
                <title>
                    {data.title} | {categories.title} | Docs
                </title>
                <meta name="description" content={data.description} />
            </Head>
            <DocsHeader />
            <div className="relative bg-white">
                <DocsBackground />
                <div className="container relative ">
                    <div className="flex justify-between">
                        <DocsSidebar
                            docsCategories={docsCategories}
                            active={data.slug}
                        />
                        <DocsBodyMain>
                            <div className="flex items-center">
                                <div>
                                    <Link href={`/docs/`}>
                                        <a className="text-sm text-indigo-300 hover:underline ">
                                            {categories.title}
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
                            <div className="w-full xl:w-9/12">
                                <Content type={"docs"}>
                                    <ContentBlob />
                                </Content>
                            </div>
                        </DocsBodyMain>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;

    // console.log("type", type);
    // console.log("slug", slug);

    // const res = await fetch(`${NEXT_URL}/api/${type}/${slug}`);
    // const data = await res.json();

    // const typeRes = await fetch(`${NEXT_URL}/api/${type}`);
    // const typeData = await typeRes.json();

    // const docId = docs.find((doc) => doc.cat === slug);
    // console.log("docId", docId);

    const data = docs.find((doc) => doc.slug === slug);

    return {
        props: { data },
    };
};

export const getStaticPaths = async (context) => {
    // console.log("revops", revops);
    // const res = await fetch(`${NEXT_URL}/api/revops`);
    // const data = await revops.json();
    // const data = docs;

    const posts = docs.map((post) => {
        // return post.map((item) => {
        //
        // });
        return {
            slug: post.slug,
        };
    });

    const paths = posts.map((post) => {
        return {
            params: post,
        };
    });

    return {
        paths,
        fallback: false,
    };
};

function ContentBlob() {
    return (
        <>
            <h1 className="mb-6">How to get started on the Nue Platform?</h1>
            <p className="mb-6">
                Learn about Integrating RevOps into your workplace.
            </p>
            <p className="mb-6">
                Lorem ipsum dolor sit amet,{" "}
                <a href="#">consectetur adipiscing elit</a>. Tempus nibh diam
                neque libero. Elementum turpis mauris nibh lacus sit. Feugiat
                dignissim vitae viverra ultricies. At morbi odio vestibulum diam
                scelerisque nec sit neque nunc. Turpis iaculis nunc ac, posuere
                eget. Faucibus non sed pellentesque ultricies libero id facilisi
                laoreet.
            </p>
            <p className="mb-6">
                Id nunc aliquam feugiat egestas morbi netus massa id sagittis.
                Sollicitudin arcu nulla nunc, egestas vitae ligula elementum
                purus ac. Vel mi viverra elit enim in turpis molestie lectus
                arcu.
            </p>
            <hr />
            <h2 className="mb-6">Setting up an acount</h2>
            <p className="mb-6">
                To start using RevOps, first set up an acount.
            </p>
            <p className="mb-6">
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
                Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                aliquet. Mauris a sapien id libero commodo condimentum non eu
                diam. Integer sed tortor sagittis nibh iaculis euismod. Vivamus
                pharetra tortor orci, id lobortis sapien faucibus in.
            </p>
            <p className="mb-6">
                Duis eleifend nisi et augue consequat ultricies. Quisque
                tincidunt rhoncus risus sed ornare. Pellentesque nisi nisl,
                aliquam et velit nec, facilisis vehicula urna. Nulla pretium
                arcu scelerisque metus porttitor sodales. Proin rhoncus
                scelerisque sapien, id consequat mauris. Fusce eget pretium
                risus.
            </p>
            <h3 className="mb-6">Step by step procedure</h3>
            <p className="mb-6">
                Fallow these steps in order to set up an acount.
            </p>
            <p className="mb-6">
                Step 1—Vestibulum bibendum commodo dui gravida convallis. Nam
                lorem risus, feugiat eget vehicula at, posuere sed sem.
            </p>
            <p className="mb-6">
                Step 2—Vestibulum bibendum commodo dui gravida convallis. Nam
                lorem risus, feugiat eget vehicula at, posuere sed sem.
            </p>
            <p className="mb-6">
                Step 3—Vestibulum bibendum commodo dui gravida convallis. Nam
                lorem risus, feugiat eget vehicula at, posuere sed sem.
            </p>
            <p className="mb-6">
                Step 4—Vestibulum bibendum commodo dui gravida convallis. Nam
                lorem risus, feugiat eget vehicula at, posuere sed sem.
            </p>

            <hr />
            <h3 className="mb-6">Verify all given information</h3>
            <p className="mb-6">
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
            </p>
            <ul>
                <li>
                    Aliquam cursus mollis ipsum. Nulla tristique ut lacus at
                    aliquet. Mauris a sapien id libero commodo condimentum non
                    eu diam. Integer sed tortor sagittis nibh iaculis euismod.
                </li>
                <li>
                    Vivamus pharetra tortor orci, id lobortis sapien faucibus
                    in. Duis eleifend nisi et augue consequat ultricies. Quisque
                    tincidunt rhoncus risus sed ornare.
                </li>
            </ul>
            <p className="mb-6">
                Pellentesque nisi nisl, aliquam et velit nec, facilisis vehicula
                urna. Nulla pretium arcu scelerisque metus porttitor sodales.
                Proin rhoncus scelerisque sapien, id consequat mauris. Fusce
                eget pretium risus.
            </p>
            <p className="mb-6">&nbsp;</p>
            <h3 className="mb-6">Verify all given information</h3>
            <p className="mb-6">
                Vestibulum bibendum commodo dui gravida convallis. Nam lorem
                risus, feugiat eget vehicula at, posuere sed sem. Nam augue
                diam, blandit ac tincidunt fermentum, pharetra ut turpis.
            </p>

            <p>
                Pellentesque nisi nisl, aliquam et velit nec, facilisis vehicula
                urna. Nulla pretium arcu scelerisque metus porttitor sodales.
                Proin rhoncus scelerisque sapien, id consequat mauris. Fusce
                eget pretium risus.
            </p>
        </>
    );
}
