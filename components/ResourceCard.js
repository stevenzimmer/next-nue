import ResourceLabel from "./ResourceLabel";
import Link from "next/link";
import Image from "next/image";
export default function Card(props) {
    // console.log("Card props", props);
    return (
        <div className="w-full lg:w-1/3 px-2 mb-6">
            <div className=" relative">
                <Image
                    src={props.item.image.url}
                    width={props.item.image.width}
                    height={props.item.image.height}
                />
                {props.item.duration && (
                    <div className="absolute  bottom-3 shadow-lg right-3 bg-indigo-300 text-white rounded-lg flex items-center px-2 py-1">
                        <p>{props.item.duration}</p>
                    </div>
                    //  props.item.duration
                )}
            </div>
            <div className="py-3">
                <div>
                    {props.item.label && (
                        <ResourceLabel>{props.item.label}</ResourceLabel>
                    )}

                    <Link href={props.item.link}>
                        <a className="text-lg md:text-xl font-hntMedium mb-2 hover:text-indigo-300 block">
                            {props.item.title}
                        </a>
                    </Link>
                    <p className="text-grey-600 md:text-base text-sm ">
                        {props.item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
