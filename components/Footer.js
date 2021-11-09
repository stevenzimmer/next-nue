import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-blue-dark py-2">
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-11/12 lg:w-full">
                        <div className="flex items-center justify-between ">
                            <div>
                                <Link href="/">
                                    <a className="font-hntMedium text-xl md:text-3xl text-white">
                                        nue
                                    </a>
                                </Link>
                            </div>
                            <div className="text-center text-white">
                                <p>&#169; {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
