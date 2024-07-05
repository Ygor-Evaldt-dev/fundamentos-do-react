import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <nav className={`
            min-w-52 flex flex-col gap-1
            bg-zinc-700 rounded-lg p-2
        `}>
            <MenuItem label="Página em pages" url="/pagina" />
            <MenuItem label="Página em app/fundamentos" url="/fundamentos/pagina" />
            <MenuItem label="Página evento básico" url="/evento-basico" />
        </nav>
    )
}