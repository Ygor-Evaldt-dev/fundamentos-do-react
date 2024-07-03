export default function Footer({
    leftText,
    rightText
}: { leftText: string, rightText: string }) {
    return (
        <footer className={`
            h-36 rounded-lg p-4
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