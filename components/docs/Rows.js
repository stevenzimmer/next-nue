// Data
import { docs } from "@/data/docs";

// Components
import Card from "@/components/ResourceCard";

export default function DocsRows({ category }) {
    return (
        <div className="mb-12">
            <div className="mb-6">
                <h2 className="font-hntMedium mb-2 text-2xl">
                    {category.title}
                </h2>
                <p className="text-black text-opacity-60 text-lg">
                    {category.subtitle}
                </p>
            </div>
            <div className="flex flex-wrap w-full -mx-2">
                {docs.map((doc, i) => {
                    {
                        return (
                            doc.categoryID === category.id && (
                                <Card item={doc} key={i} />
                            )
                        );
                    }
                })}
            </div>
        </div>
    );
}
