import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import useInView from "react-cool-inview";
const item = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.5, 0.95],
            duration: 1,
        },
    },
};

export default function FloatingImage({
    classes,
    src,
    alt,
    width,
    height,
    responsive = false,
}) {
    const controls = useAnimation();

    const { observe, unobserve, inView, scrollDirection, entry } = useInView({
        threshold: 0.3, // Default is 0
        onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
            // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            // console.log("observe");
            controls.start("show");
            // unobserve();
            // Triggered when the target enters the viewport
        },
        onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
            // Triggered when the target leaves the viewport
            // controls.start("leave");
        },
        // More useful options...
    });

    return (
        <motion.div
            animate={controls}
            variants={item}
            initial="hidden"
            className={`${classes}`}
            ref={observe}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                layout={`${responsive ? "responsive" : "intrinsic"}`}
            />
        </motion.div>
    );
}
