// Next imports
import Head from "next/head";

// Components
import DocsHeader from "@/components/docs/Header";
import DocsBackground from "@/components/docs/Background";
import DocsSidebar from "@/components/docs/Sidebar";
import DocsRows from "@/components/docs/Rows";
import DocsBodyMain from "@/components/docs/BodyMain";

// Data
import { docsCategories } from "@/data/docs";

export default function Docs() {
    return (
        <>
            <Head>
                <title>Nue Knowledge Center | Docs</title>
                <meta
                    name="description"
                    content="Explore our guides and examples to integrate nue"
                />
            </Head>
            <DocsHeader />
            <div className="relative bg-white">
                <DocsBackground />
                <div className="container relative ">
                    <div className="flex justify-between">
                        <DocsSidebar docsCategories={docsCategories} />
                        <DocsBodyMain>
                            {docsCategories.map((category, i) => {
                                return <DocsRows category={category} key={i} />;
                            })}
                        </DocsBodyMain>
                    </div>
                </div>
            </div>
        </>
    );
}
