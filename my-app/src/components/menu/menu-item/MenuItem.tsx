import Link from "next/link";
import { Props } from "./Props";

export default function MenuItem({
    label,
    url,
    icon
}: Props) {
    return (
        <Link
            className={`
                hover:bg-zinc-900  rounded-md 
                px-4 py-2 w-full flex gap-2 items-center
                text-start     
            `}
            href={url}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </Link>
    )
}