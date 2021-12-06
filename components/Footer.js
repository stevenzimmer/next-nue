import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-blue-dark py-2 md:px-6">
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-11/12 lg:w-full">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center ">
                                <Link href="/">
                                    <a className="font-hntMedium leading-tight text-xl md:text-3xl text-white">
                                        nue
                                    </a>
                                </Link>
                                <div className="px-4 md:px-12 flex items-center justify-start">
                                    <div className="px-6">
                                        <Link href="/company/">
                                            <a className="text-sm md:text-base text-white opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear">
                                                Company
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="px-6 ">
                                        <Link href="/company/careers/">
                                            <a className="text-sm md:text-base text-white opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear">
                                                Jobs
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="px-6 ">
                                        <Link href="/product/">
                                            <a className="text-sm md:text-base text-white opacity-80 hover:opacity-100 transition-opacity duration-200 ease-linear">
                                                Product
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right text-white">
                                <p>&#169; {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
