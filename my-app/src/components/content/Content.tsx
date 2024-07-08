import { Props } from "./Props";

export default function Content({
    children
}: Props) {
    return (
        <main className={
            `flex flex-col flex-1 p-2
            bg-zinc-700`
        }>
            {children}
        </main>
    )
}