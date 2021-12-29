import SidebarMenuItem from "./SidebarMenuItem";
export default function DocsSidebar({ docsCategories }) {
    return (
        <>
            <div className="hidden lg:block lg:w-1/5 py-12">
                {docsCategories.map((category, i) => {
                    return (
                        <div className="mb-12 " key={i}>
                            <SidebarMenuItem category={category} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
