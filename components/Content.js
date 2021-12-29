export function Content({ children, type }) {
    // console.log(children);
    return <div className={`py-6 content content-${type}`}>{children}</div>;
}
