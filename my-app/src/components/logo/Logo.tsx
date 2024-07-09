import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className={`
                h-16 p-2
                flex items-center gap-2
                bg-purple-900
            `}
        >
            <span><IconBrandReact size={35} stroke={1} /></span>
            <span className="font-black text-4xl">React</span>
        </Link>
    )
}