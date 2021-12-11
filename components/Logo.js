import Link from "next/link";

export default function Logo(props) {
    return (
        <div className="md:w-32">
            <Link href="/" replace>
                <a className="font-hntMedium text-2xl md:text-4xl md:leading-4">
                    nue
                </a>
            </Link>
        </div>
    );
}
