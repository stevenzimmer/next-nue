import Head from "next/head";
import Link from "next/link";
import Header1 from "@/components/text/Header1";
import ResourceRows from "@/components/ResourceRows";
import ResourceFeaturedRow from "@/components/ResourceFeaturedRow";
import { dummyContent } from "@/data/dummy-content";

import ResourcesSecondaryMenu from "@/components/ResourcesSecondaryMenu";
const featuredContent = {
    label: "Beginners Guide",
    title: "Integrating RevOps into your workplace",
    description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
    btn: {
        text: "Read the article",
        link: "/resources/integrating-revops-into-your-workplace/",
    },
    image: {
        url: "/images/revops/featured-1.jpg",
        width: 680,
        height: 450,
    },
};
const featuredContent2 = {
    label: "Beginners Guide",
    title: "Managing RevOps from start to finish",
    description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
    btn: {
        text: "Read the article",
        link: "/resources/managing-revops-from-start-to-finish/",
    },
    image: {
        url: "/images/revops/featured-2.jpg",
        width: 680,
        height: 450,
    },
};

const bodyRows = [
    {
        title: "Trending",
        items: dummyContent,
    },
    {
        title: "New articles",
        items: dummyContent,
    },
];
export default function Resources() {
    return (
        <>
            <Head>
                <title>Revops Review</title>
            </Head>
            <div className="py-40">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="w-11/12 sm:w-full  xl:w-10/12">
                            <div>
                                <Header1>RevOps Review</Header1>
                            </div>
                            <ResourcesSecondaryMenu />
                            <ResourceFeaturedRow item={featuredContent} />

                            {bodyRows.map((row, i) => {
                                return <ResourceRows row={row} key={i} />;
                            })}

                            <ResourceFeaturedRow
                                item={featuredContent2}
                                swap={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
