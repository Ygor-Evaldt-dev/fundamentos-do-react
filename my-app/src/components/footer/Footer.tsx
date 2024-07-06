import { Props } from "./Props";

export default function Footer({
    leftText,
    rightText
}: Props) {
    return (
        <footer className={`
            h-10 p-4
            flex justify-between items-center
            bg-zinc-700 border-2 border-zinc-600
        `}>
            <p className="text-sm">
                {leftText}
            </p>
            <p className="text-sm">
                {rightText}
            </p>
        </footer>
    )
}