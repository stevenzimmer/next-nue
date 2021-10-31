import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="absolute w-full top-0 left-0 right-0 bg-transparent z-50 ">
            <div className="container">
                <div className="flex items-center justify-between py-5">
                    <div>
                        <Link href="/">
                            <a>Nue</a>
                        </Link>
                    </div>
                    <div className="flex items-center -mx-3">
                        <div className="px-3">
                            <Link href="/sign-in/">
                                <button className="btn btn-white">
                                    Sign in
                                </button>
                            </Link>
                        </div>
                        <div className="px-3">
                            <Link href="/book-a-demo/">
                                <button className="btn btn-primary">
                                    Book a demo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
