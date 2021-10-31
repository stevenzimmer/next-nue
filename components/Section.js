import { Blob } from "react-blob";
const BackgroundBlob = ({ style, props }) => {
    return (
        <Blob
            size="100vh"
            style={{
                position: "absolute",
                zIndex: 0,
                backgroundColor: "#000",
                opacity: 0.05,
                animationDuration: "400s",
                ...style,
            }}
            {...props}
        />
    );
};
export default function Section({
    children,
    bgColor = "bg-transparent",
    blobs = [],
}) {
    return (
        <section className={`relative ${bgColor}`}>
            {blobs &&
                blobs.map((blobStyle, i) => {
                    return <BackgroundBlob key={i} style={blobStyle} />;
                })}
            {children}
        </section>
    );
}
