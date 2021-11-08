import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container py-2">
            <div className="flex justify-center">
                <div className="w-11/12 lg:w-full">
                    <div className="flex items-center justify-between ">
                        <div>
                            <Link href="/">
                                <a className="font-hntMedium text-xl md:text-3xl">
                                    nue
                                </a>
                            </Link>
                        </div>
                        <div className="text-center">
                            <p>&#169; {new Date().getFullYear()}</p>
                        </div>
                        <div>
                            <p className="text-sm md:text-base">
                                The system of record for ARR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
