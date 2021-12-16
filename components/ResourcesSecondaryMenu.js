import { useState, useEffect } from "react";
// import { secondaryMenu } from "@/data/secondary-menu";
import Link from "next/link";
import { useRouter } from "next/router";
export default function ResourcesSecondaryMenu(props) {
    const router = useRouter();
    const { type } = router.query;
    // console.log(type);
    const [revops, setRevops] = useState(null);
    const [revopsType, setRevopsType] = useState("");
    const fetchRevops = async () => {
        const response = await fetch(`/api/revops`);
        const data = await response.json();
        setRevops(data);
    };

    useEffect(() => {
        fetchRevops();
        // console.log(revops);
        setRevopsType(type);
    }, [router.asPath]);
    return (
        <>
            {revops && (
                <div className="mb-6">
                    <ul className="flex flex-wrap -mx-6">
                        {revops.map((menu, i) => {
                            return (
                                <li className="p-6" key={i}>
                                    <Link href={`/${menu.type}/`}>
                                        <a
                                            className={`${
                                                revopsType === menu.type &&
                                                "text-indigo-500 hover:no-underline hover:text-opacity-100 cursor-auto"
                                            } hover:text-opacity-50 hover:text-indigo-500 hover:underline font-hntMedium transition-colors duration-200`}
                                        >
                                            {menu.header}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}
