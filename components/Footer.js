import Link from "next/link";
import SectionFade from "./SectionFade";

const footerLinks = [
    {
        header: "Product",
        children: [
            {
                text: "Overview",
                link: "/product/",
            },
            {
                text: "Platform",
                link: "/platform/",
            },
            {
                text: "Sign in",
                link: "https://app.nue.io/login",
            },
        ],
    },
    {
        header: "Company",
        children: [
            {
                text: "About Nue",
                link: "/company/",
            },
            {
                text: "Careers",
                link: "/company/careers/",
            },
        ],
    },
];
export default function Footer() {
    return (
        <footer className="bg-blue-50 py-12 md:px-6 relative">
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-11/12 md:w-full lg:w-9/12 xl:w-7/12">
                        <div className="flex justify-between flex-wrap ">
                            <div className="w-full md:w-3/4 lg:w-4/5 mb-12 md:mb-0">
                                <div className="flex justify-start -mx-6">
                                    {footerLinks.map((link, i) => {
                                        return (
                                            <div key={i} className="w-1/2 px-6">
                                                <div className="mb-6">
                                                    <p className="uppercase font-hntMedium">
                                                        {link.header}
                                                    </p>
                                                </div>
                                                {link.children.map(
                                                    (child, j) => {
                                                        return (
                                                            <div
                                                                key={j}
                                                                className="mb-4 last:mb-0"
                                                            >
                                                                <Link
                                                                    href={`${child.link}`}
                                                                >
                                                                    <a className="hover:text-blue-500 transition-colors duration-200">
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
                            <div className="md:w-1/4 lg:w-1/5 text-right flex flex-col justify-between">
                                <div className="mb-4">
                                    <Link href="https://calendly.com/nue/nue-io-overview-conversation">
                                        <a
                                            target="_blank"
                                            className="btn btn-primary w-full"
                                        >
                                            Book a demo
                                        </a>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link href="/">
                                        <a className="font-hntMedium leading-tight text-xl md:text-3xl ">
                                            nue
                                        </a>
                                    </Link>
                                    <div>
                                        <p>&#169; {new Date().getFullYear()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
