import Link from "next/link";

export default function MenuItem({
    label,
    url
}: { label: string, url: string }) {
    return (
        <Link
            className={`
                bg-black hover:bg-zinc-900  rounded-md 
                px-4 py-1 w-full
                text-start     
            `}
            href={url}
        >
            {label}
        </Link>
    )
}