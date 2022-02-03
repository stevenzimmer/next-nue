import Link from "next/link";
import Image from "next/image";

export default function Logo(props) {
    return (
        <div className="w-20 md:w-24">
            <Link href="/" replace>
                <a className="font-hntMedium text-2xl md:text-4xl md:leading-4">
                    <Image
                        src={`/logos/nue-logo.png`}
                        alt={`Nue logo`}
                        width={240}
                        height={140}
                        layout="intrinsic"
                    />
                </a>
            </Link>
        </div>
    );
}
