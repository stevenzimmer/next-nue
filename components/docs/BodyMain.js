export default function DocsBodyMain({ children }) {
    return (
        <>
            <div className="w-full lg:w-3/4 bg-white py-12">
                <div className="flex justify-center">
                    <div className="w-11/12 lg:w-10/12">
                        <div className="w-full">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
