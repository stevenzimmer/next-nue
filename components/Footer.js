import Link from "next/link";
import SectionFade from "./SectionFade";
import Logo from "./Logo";
import BlobPurple4 from "./blobs/Purple4";
import WavePurple2 from "./waves/Purple2";

import { footerLinks } from "@/data/footer";
export default function Footer() {
    return (
        <footer className="py-28 md:px-6 relative overflow-hidden">
            <SectionFade />
            <div className="absolute w-full h-full inset-0 opacity-30">
                <WavePurple2 />
            </div>
            <div className="absolute w-full h-full inset-0 opacity-30">
                <BlobPurple4 />
            </div>
            <div className="container relative z-10">
                <div className="flex items-center md:items-stretch justify-start flex-wrap flex-col-reverse lg:flex-row">
                    <div className="w-11/12 lg:w-2/5 ">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-2 lg:mb-0">
                                <div className="mb-4">
                                    <Logo />
                                </div>

                                <div>
                                    <p className="text-grey-600">
                                        RevOps for the Modern Company
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-grey-600 text-sm">
                                    &#169; {new Date().getFullYear()} Nue.io
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 lg:w-3/5 mb-12 sm:mb-0">
                        <div className="flex justify-between flex-wrap">
                            <div className="w-full sm:w-4/5 lg:w-3/5 xl:w-4/5 mb-12 lg:mb-0">
                                <div className="flex justify-start -mx-6">
                                    {footerLinks.map((link, i) => {
                                        return (
                                            <div key={i} className="w-1/2 px-6">
                                                <div className="mb-3">
                                                    <p className="uppercase font-hntMedium">
                                                        {link.header}
                                                    </p>
                                                </div>
                                                {link.children.map(
                                                    (child, j) => {
                                                        return (
                                                            <div
                                                                key={j}
                                                                className="mb-3 last:mb-0"
                                                            >
                                                                <Link
                                                                    href={`${child.link}`}
                                                                >
                                                                    <a className="hover:text-blue-500 text-grey-600 text-sm transition-colors duration-200">
                                                                        {
                                                                            child.text
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="w-full sm:text-right sm:w-1/5 md:w-1/5 lg:w-2/5 xl:w-1/5">
                                <Link href="https://calendly.com/nue/nue-io-overview-conversation">
                                    <a
                                        target="_blank"
                                        className="btn btn-primary btn-big "
                                    >
                                        Book a demo
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 md:w-full lg:w-9/12 xl:w-7/12 hidden">
                        <div className="flex justify-between flex-wrap ">
                            <div className="w-full md:w-3/4 lg:w-4/5 mb-12 md:mb-0"></div>
                            <div className="md:w-1/4 lg:w-1/5 text-right flex flex-col justify-between">
                                <div className="mb-4"></div>
                                <div className="flex items-center justify-between">
                                    <Logo />
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
