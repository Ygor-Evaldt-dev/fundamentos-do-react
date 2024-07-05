import { Props } from "./Props";

export default function Content({
    children
}: Props) {
    return (
        <main className={
            `flex flex-col rounded-lg flex-1 p-2
            bg-emerald-400 text-3xl`
        }>
            {children}
        </main>
    )
}