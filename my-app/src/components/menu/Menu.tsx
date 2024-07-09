import { IconBrandJavascript, IconCode, IconFileCheck, IconH1, IconRepeat } from "@tabler/icons-react";
import MenuItem from "./menu-item/MenuItem";

export default function Menu() {
    return (
        <nav className={`
            min-w-52 px-2 py-5
            flex flex-col gap-1
        `}>
            <span className="text-sm text-zinc-500">Estado</span>
            <MenuItem label="Componente sem estado" url="/estado/sem" icon={<IconCode />} />
            <MenuItem label="Componente com estado" url="/estado/com" icon={<IconCode />} />
            <span className="text-sm text-zinc-500">Fundamentos</span>
            <MenuItem label="Início" url="/pagina" icon={<IconFileCheck />} />
            <MenuItem label="Evento" url="/evento-basico" icon={<IconRepeat />} />
            <MenuItem label="Fundamentos" url="/fundamentos/pagina" icon={<IconCode />} />
            <span className="text-sm text-zinc-500">Componentes</span>
            <MenuItem label="Básico" url="/componentes/basico" icon={<IconCode />} />
            <MenuItem label="Título" url="/componentes/titulo" icon={<IconH1 />} />
            <MenuItem label="Trecho" url="/componentes/trecho" icon={<IconBrandJavascript />} />
        </nav>
    )
}