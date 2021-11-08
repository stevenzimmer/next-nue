// import { Blob } from "react-blob";
import { useInView } from "react-intersection-observer";
export default function Section({ children, bgColor = "bg-transparent" }) {
    // const { inView, entry, ref } = useInView();
    // console.log(ref);
    // console.log(entry);
    // console.log(inView);
    return (
        <section
            className={`relative z-10 overflow-hidden ${bgColor}`}
            // ref={ref}
        >
            {children}
        </section>
    );
}
