import { IconCode, IconHome, IconRepeat } from "@tabler/icons-react";
import MenuItem from "./menu-item/MenuItem";

export default function Menu() {
    return (
        <nav className={`
            min-w-52 flex flex-col gap-1
        `}>
            <MenuItem label="Home" url="/pagina" icon={<IconHome />} />
            <MenuItem label="Fundamentos" url="/fundamentos/pagina" icon={<IconCode />} />
            <MenuItem label="Evento" url="/evento-basico" icon={<IconRepeat />} />
        </nav>
    )
}