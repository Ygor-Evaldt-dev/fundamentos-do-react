import { IconCode, IconHome, IconRepeat } from "@tabler/icons-react";
import MenuItem from "./menu-item/MenuItem";

export default function Menu() {
    return (
        <nav className={`
            min-w-52 py-4 
            flex flex-col gap-1
        `}>
            <MenuItem label="Início" url="/pagina" icon={<IconHome />} />
            <MenuItem label="Evento" url="/evento-basico" icon={<IconRepeat />} />
            <MenuItem label="Fundamentos" url="/fundamentos/pagina" icon={<IconCode />} />
            <MenuItem label="Básico" url="/componentes/basico" icon={<IconCode />} />
            <MenuItem label="Título" url="/componentes/titulo" icon={<IconCode />} />
            <MenuItem label="Trecho" url="/componentes/trecho" icon={<IconCode />} />
        </nav>
    )
}