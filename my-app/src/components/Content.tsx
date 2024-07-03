export default function Content({
    children
}: any) {
    return (
        <section className={
            `flex flex-col rounded-lg flex-1 p-2
            bg-emerald-400 text-3xl`
        }>
            {children}
        </section>
    )
}