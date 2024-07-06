import { IconBrandReact } from "@tabler/icons-react";

export default function Logo() {
    return (
        <span className={`
            h-16 p-2
            flex items-center gap-2
            bg-gradient-to-b to-zinc-900 from-zinc-950
        `}>
            <span><IconBrandReact size={35} stroke={1} rotate={45} className="rotate" /></span>
            <span className="font-black text-4xl">React</span>
        </span>
    )
}