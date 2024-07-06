import { Props } from "./Props";

export default function Header({
    title,
    subtitle,
    className
}: Props) {
    return (
        <header className={`
            h-16
            flex flex-col justify-center items-start px-2
            text-white border-b border-zinc-900
            ${className ?? ''}
        `}>
            <h1 className="text-2xl font-black">{title}</h1>
            <p className="text-sm text-zinc-400">{subtitle}</p>
        </header>
    );
}