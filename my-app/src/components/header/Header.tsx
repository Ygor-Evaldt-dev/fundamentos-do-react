import { Props } from "./Props";

export default function Header({
    title,
    subtitle,
    className
}: Props) {
    return (
        <header className={`
            h-28 rounded-lg 
            flex flex-col justify-center items-center 
            bg-purple-600 text-white ${className ?? ''}
        `}>
            <h1 className="text-3xl font-black">{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}