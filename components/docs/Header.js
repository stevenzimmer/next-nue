import { useState, useEffect } from "react";

// Next imports
import { useRouter } from "next/router";

// Icon imports
import { CaretIcon } from "../icons/Caret";

// Components
import SidebarMenuItem from "./SidebarMenuItem";

// Data
import { docsCategories } from "@/data/docs";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

export default function DocsHeader() {
    return (
        <>
            <div className="pt-28 md:pt-28 pb-12 bg-red-50 bg-opacity-20 relative">
                <div className="absolute left-0 top-0 w-full">
                    <svg
                        width="1056"
                        height="961"
                        viewBox="0 0 1056 961"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                    >
                        <path
                            d="M-186.372 516.943C-230.534 362.788 -176.863 171.417 -71.2841 44.0285C-22.3145 -15.0828 38.2215 -63.5555 106.606 -98.4121C174.989 -133.269 249.777 -153.773 326.375 -158.666C469.195 -167.129 606.044 -121.757 729.931 -54.0888C840.01 6.12388 944.651 87.6795 1006.02 210.377C1067.39 333.074 1077.52 503.61 1005.14 635.994C917.432 796.363 745.882 853.565 592.975 895.58C421.334 942.757 241.659 990.066 80.1937 938.753C-81.2716 887.44 -137.733 686.643 -186.372 516.943Z"
                            fill="url(#paint0_linear_974_3496)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_974_3496"
                                x1="-310.091"
                                y1="-452.555"
                                x2="-110.279"
                                y2="868.486"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0" />
                                <stop
                                    offset="0.448049"
                                    stopColor="#3C68FF"
                                    stopOpacity="0.16"
                                />
                                <stop
                                    offset="0.666054"
                                    stopColor="#89BDBF"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute top-0 right-0 ">
                    <svg
                        width="842"
                        height="968"
                        viewBox="0 0 842 968"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                    >
                        <path
                            d="M23.0271 286.346C45.5528 127.58 172.584 -25.2804 320.927 -98.5543C389.743 -132.564 464.782 -152.144 541.435 -156.091C618.089 -160.038 694.738 -148.269 766.676 -121.507C900.537 -71.0055 1007 26.2189 1092.53 138.518C1168.49 238.379 1230.79 355.512 1236.81 492.569C1242.82 629.626 1182.53 789.472 1062.47 880.845C917 991.521 737.035 973.81 580.283 949.833C404.322 922.931 220.97 892.874 94.4549 780.188C-32.0599 667.502 -1.74879 461.132 23.0271 286.346Z"
                            fill="url(#paint0_linear_974_3498)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_974_3498"
                                x1="305.332"
                                y1="-649.355"
                                x2="-50.8189"
                                y2="638.369"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0" />
                                <stop
                                    offset="0.448049"
                                    stopColor="#3C68FF"
                                    stopOpacity="0.16"
                                />
                                <stop
                                    offset="0.666054"
                                    stopColor="#89BDBF"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute w-full top-0 left-0 transform -translate-y-0">
                    <svg
                        width="1440"
                        height="819"
                        viewBox="0 0 1440 819"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                    >
                        <path
                            opacity="0.2"
                            d="M1286.58 -359.629C1444.3 -395.668 1614.3 -325.882 1679.58 -286.483C1727.19 -7.59586 1819.19 566.1 1806.37 629.78C1790.34 709.381 1579.99 801.696 1136.49 818.025C781.694 831.088 62.3947 432.655 -252.905 231.806L-66.7374 -304.64C-92.9853 -198.105 -36.7771 5.12807 398.039 -34.2207C941.559 -83.4068 1089.42 -314.581 1286.58 -359.629Z"
                            fill="url(#paint0_linear_974_3497)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_974_3497"
                                x1="231.408"
                                y1="-391.606"
                                x2="53.544"
                                y2="981.656"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.24258" stopColor="white" />
                                <stop
                                    offset="0.556021"
                                    stopColor="#6338EB"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="container relative ">
                    <div className="flex justify-center">
                        <div className="w-11/12 md:w-full">
                            <h1 className="text-2xl md:text-4xl font-hntMedium ">
                                Nue Knowledge Center
                            </h1>
                            <HeaderDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function HeaderDropdown() {
    const [headerDropdownOpen, setHeaderDropdownOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setHeaderDropdownOpen("");
    }, [router.asPath]);
    return (
        <>
            <div className=" lg:hidden mt-6">
                <div
                    className="flex items-center justify-between p-3 bg-white rounded-lg  cursor-pointer select-none"
                    onClick={(e) => setHeaderDropdownOpen(!headerDropdownOpen)}
                >
                    <div>
                        <p className="font-hntMedium text-base xl:text-xl">
                            Nue Docs navigation
                        </p>
                    </div>

                    <div
                        className={`transform origin-center duration-200 ${
                            headerDropdownOpen ? "" : "rotate-180"
                        }`}
                    >
                        <CaretIcon />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {headerDropdownOpen && (
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
                        className="px-3 absolute w-11/12 md:w-full z-10 lg:hidden shadow-lg rounded-b-lg bg-white"
                    >
                        {docsCategories.map((category, i) => {
                            return (
                                <div className="py-2" key={i}>
                                    <SidebarMenuItem
                                        category={category}
                                        // active={active}
                                    />
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
