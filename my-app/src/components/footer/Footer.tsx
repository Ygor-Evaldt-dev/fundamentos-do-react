import { Props } from "./Props";

export default function Footer({
    leftText,
    rightText
}: Props) {
    return (
        <footer className={`
            h-16 rounded-lg p-4
            flex justify-between items-center
            bg-cyan-600
        `}>
            <p>
                {leftText}
            </p>
            <p>
                {rightText}
            </p>
        </footer>
    )
}