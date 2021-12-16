import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header1 from "@/components/text/Header1";

import ResourceRows from "@/components/ResourceRows";
import ResourceLabel from "@/components/ResourceLabel";

import { dummyContent } from "@/data/dummy-content";

const bodyRows = [
    {
        title: "Read next",
        items: dummyContent,
    },
    {
        title: "Articles with similar topics",
        items: dummyContent,
    },
];
export default function ResourcesChild(props) {
    // console.log("props", props);
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);
    const [resource, setResource] = useState(null);
    const fetchResource = async () => {
        const response = await fetch(`/api/resources/${slug}`);
        const data = await response.json();
        setResource(data);
    };

    useEffect(() => {
        fetchResource();
        // console.log(resource);
    }, []);
    return (
        <>
            {resource && (
                <>
                    <Head>
                        <title>{resource.title}</title>
                    </Head>
                    <div className="py-40">
                        <div className="container">
                            <div className="flex justify-center">
                                <div className="w-11/12 sm:w-full  xl:w-10/12">
                                    <div className="flex items-center mb-12">
                                        <div>
                                            <Link href="/resources/">
                                                <a className="text-black text-opacity-70 text-sm text-indigo-300 hover:underline">
                                                    Articles
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
                                                {resource.title}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-grey-100 py-40 rounded-lg "></div>
                                    <div className="flex justify-start py-12 border-b">
                                        <div className="lg:w-3/12">
                                            <p className="font-hntMedium text-lg mb-2">
                                                Topic
                                            </p>
                                            <ResourceLabel>
                                                {resource.label}
                                            </ResourceLabel>
                                        </div>
                                        <div className="lg:w-7/12">
                                            <div className="">
                                                <Header1>
                                                    {resource.title}
                                                </Header1>
                                            </div>
                                            <div className="flex justify-between py-12 border-b">
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
                                                <div className="content ">
                                                    <p className="mb-6">
                                                        Vestibulum bibendum
                                                        commodo dui gravida
                                                        convallis. Nam lorem
                                                        risus, feugiat eget
                                                        vehicula at, posuere sed
                                                        sem. Nam augue diam,
                                                        blandit ac tincidunt
                                                        fermentum, pharetra ut
                                                        turpis.{" "}
                                                        <a href="">
                                                            Aliquam cursus
                                                            mollis ipsum. Nulla
                                                        </a>
                                                        tristique ut lacus at
                                                        aliquet. Mauris a sapien
                                                        id libero commodo
                                                        condimentum non eu diam.
                                                        Integer sed tortor
                                                        sagittis nibh iaculis
                                                        euismod. Vivamus
                                                        pharetra tortor orci, id
                                                        lobortis sapien faucibus
                                                        in. Duis eleifend nisi
                                                        et augue consequat
                                                        ultricies. Quisque
                                                        tincidunt rhoncus risus
                                                        sed ornare.
                                                    </p>
                                                    <p className="mb-6">
                                                        {" "}
                                                        Pellentesque nisi nisl,
                                                        aliquam et velit nec,
                                                        facilisis vehicula urna.
                                                        Nulla pretium arcu
                                                        scelerisque metus
                                                        porttitor sodales. Proin
                                                        rhoncus scelerisque
                                                        sapien, id consequat
                                                        mauris. Fusce eget
                                                        pretium risus.
                                                    </p>
                                                    <h2 className="mb-6">
                                                        H2 Title goes here
                                                    </h2>
                                                    <p className="mb-6">
                                                        Vestibulum bibendum
                                                        commodo dui gravida
                                                        convallis. Nam lorem
                                                        risus, feugiat eget
                                                        vehicula at, posuere sed
                                                        sem. Nam augue diam,
                                                        blandit ac tincidunt
                                                        fermentum, pharetra ut
                                                        turpis. Aliquam cursus
                                                        mollis ipsum. Nulla
                                                        tristique ut lacus at
                                                        aliquet.
                                                    </p>
                                                    <h3 className="mb-6">
                                                        H3 Title goes here
                                                    </h3>
                                                    <p>
                                                        Vestibulum bibendum
                                                        commodo dui gravida
                                                        convallis. Nam lorem
                                                        risus, feugiat eget
                                                        vehicula at, posuere sed
                                                        sem. Nam augue diam,
                                                        blandit ac tincidunt
                                                        fermentum, pharetra ut
                                                        turpis. Aliquam cursus
                                                        mollis ipsum. Nulla
                                                        tristique ut lacus at
                                                        aliquet.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-12">
                                        {bodyRows.map((row, i) => {
                                            return (
                                                <ResourceRows
                                                    row={row}
                                                    key={i}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
