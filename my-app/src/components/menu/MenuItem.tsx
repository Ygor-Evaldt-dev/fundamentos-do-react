export default function MenuItem({
    label
}: { label: string }) {
    function handleClick(target: string) {
        alert(`Navegando para: ${target}`);
    }

    return (
        <button
            className={`
                bg-black hover:bg-zinc-900  rounded-md 
                px-4 py-1 w-full
                text-start     
            `}
            onClick={() => handleClick(label)}
        >
            {label}
        </button>
    )
}