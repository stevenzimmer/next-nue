import ResourceLabel from "./ResourceLabel";
import Link from "next/link";
import Image from "next/image";
export default function ResourceFeaturedRow(props) {
    console.log("featured row props", props);
    return (
        <div
            className={`flex justify-center sm:justify-between flex-wrap -mx-6 mb-12 ${
                props.swap && "flex-row-reverse"
            }`}
        >
            <div className="w-full lg:w-7/12 px-6 mb-6 lg:mb-0">
                <div className="relative">
                    <Image
                        src={props.item.image.url}
                        width={props.item.image.width}
                        height={props.item.image.height}
                    />
                    {props.item.duration && (
                        <div className="absolute bottom-3 shadow-lg right-3 bg-indigo-300 text-white rounded-lg flex items-center px-2 py-1">
                            <p>{props.item.duration}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full lg:w-5/12 px-6">
                <div className="mb-2">
                    <ResourceLabel>{props.item.label}</ResourceLabel>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl md:text-6xl font-hntMedium">
                        {props.item.title}
                    </h2>
                </div>
                <div className="mb-6">
                    <p className="text-grey-600 md:text-lg">
                        {props.item.description}
                    </p>
                </div>
                <div>
                    <Link href={props.item.btn.link}>
                        <a className={`btn btn-big btn-indigo`}>
                            {props.item.btn.text}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
