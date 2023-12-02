import Link from "next/link";

export default function Logo(props) {
    return (
        <div className="">
            <Link href="/" replace>
                <a className="font-hntMedium text-2xl md:text-4xl md:leading-4 ">
                  <p>Mdrn Dsgn</p>
                </a>
            </Link>
        </div>
    );
}
