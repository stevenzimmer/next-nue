import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

import Image from "next/image";
import Link from "next/link";

const item = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export default function LeaderProfile({ leader }) {
    const controls = useAnimation();

    const { observe, unobserve, inView, scrollDirection, entry } = useInView({
        threshold: 0.25, // Default is 0
        onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
            // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
            // unobserve(); // To stop observing the current target element
            // observe(); // To re-start observing the current target element
        },
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
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
            ref={observe}
            variants={item}
            initial="hidden"
            animate={controls}
            className="mb-12 lg:w-1/3 "
        >
            <div className="w-72 h-72 mx-auto">
                <div
                    className={`${leader.blob.style} ${leader.blob.color} transform translate-x-6 flex justify-center items-end w-full h-full`}
                >
                    <div className="text-center transform -translate-x-4 -translate-y-2 ">
                        <Image
                            src={`/images/leadership/${leader.img.url}.png`}
                            alt={`${leader.name} headshot`}
                            width={leader.img.width}
                            height={leader.img.height}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <p className="font-hntMedium">{leader.name}</p>
                <p className="text-black text-sm text-opacity-60 font-hntMedium">
                    {leader.title}
                </p>
            </div>
            <div className="px-12 mb-6">
                <p className="text-sm text-grey">{leader.bio}</p>
            </div>
            <div>
                <Link href={leader.linkedin}>
                    <a target="_blank">
                        <Image
                            src={`/images/social/linkedin.png`}
                            alt={`Linkedin Icon`}
                            width={20}
                            height={20}
                        />
                    </a>
                </Link>
            </div>
        </motion.div>
    );
}
