import { useState, useEffect } from "react";

// Next imports
import Link from "next/link";
import { useRouter } from "next/router";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

// Components
import { CaretIcon } from "@/components/icons/Caret";

// Data
import { docs } from "@/data/docs";
export default function SidebarMenuItem({ category }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const currentPost = router.query
            ? docs.find((doc) => doc.slug === router.query.slug)
            : null;
        if (currentPost && currentPost.categoryID !== category.id) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    }, [router.asPath]);
    return (
        <div>
            <div
                className="flex items-center justify-between mb-2 cursor-pointer select-none"
                onClick={(e) => setMenuOpen(!menuOpen)}
            >
                <div>
                    <p className="font-hntMedium text-base xl:text-xl">
                        {category.title}
                    </p>
                </div>

                <div
                    className={`transform origin-center duration-200 ${
                        menuOpen ? "" : "rotate-180"
                    }`}
                >
                    <CaretIcon />
                </div>
            </div>
            <AnimatePresence>
                {menuOpen && <SidebarMenuDropdown category={category} />}
            </AnimatePresence>
        </div>
    );
}

function SidebarMenuDropdown({ category }) {
    const router = useRouter();
    return (
        <motion.div
            initial={{ y: -10 }}
            animate={{
                y: 0,
                transition: {
                    duration: 0.1,
                },
            }}
            exit={{
                y: -10,
                transition: {
                    duration: 0.1,
                },
            }}
        >
            {docs.map((doc, i) => {
                {
                    return (
                        doc.categoryID === category.id && (
                            <Link href={doc.link} key={i}>
                                <a
                                    className={`block mb-1 text-sm xl:text-base ${
                                        doc.slug === router.query.slug
                                            ? "text-indigo-300"
                                            : "text-black text-opacity-60 hover:text-indigo-300 hover:underline"
                                    }`}
                                >
                                    {doc.title}
                                </a>
                            </Link>
                        )
                    );
                }
            })}
        </motion.div>
    );
}
