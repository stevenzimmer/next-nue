import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="absolute w-full top-0 left-0 right-0 bg-transparent z-50 md:px-6 ">
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-11/12 md:w-full">
                        <div className="flex items-center justify-between py-5">
                            <div>
                                <Link href="/" replace>
                                    <a className="font-hntMedium text-2xl md:text-3xl">
                                        nue
                                    </a>
                                </Link>
                            </div>
                            <div className="flex items-center sm:-mx-3">
                                <div className="px-2 sm:px-3">
                                    <Link href="https://app.nue.io/login">
                                        <a
                                            target="_blank"
                                            className="btn btn-white"
                                        >
                                            Sign in
                                        </a>
                                    </Link>
                                </div>
                                <div className="sm:px-3">
                                    <Link href="https://calendly.com/nue/nue-io-overview-conversation">
                                        <a
                                            target="_blank"
                                            className="btn btn-primary"
                                        >
                                            Book a demo
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
