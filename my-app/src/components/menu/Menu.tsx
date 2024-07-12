import {
    IconArrowDown,
    IconArrowUp,
    IconBrandJavascript,
    IconCalculator,
    IconCode,
    IconFileCheck,
    IconForms,
    IconH1,
    IconNumbers,
    IconRepeat
} from '@tabler/icons-react';
import MenuItem from './menu-item/MenuItem';

export default function Menu() {
    return (
        <aside
            className={`
            min-w-52 px-2 py-5
            flex flex-col gap-1
        `}
        >
            <span className="text-sm text-zinc-500">Comunicação</span>
            <MenuItem
                label="Direta"
                url="/comunicacao/direta"
                icon={<IconArrowDown />}
            />
            <MenuItem
                label="Indireta"
                url="/comunicacao/indireta"
                icon={<IconArrowUp />}
            />
            <span className="text-sm text-zinc-500">Estado</span>
            <MenuItem
                label="Componente sem estado"
                url="/estado/sem"
                icon={<IconCode />}
            />
            <MenuItem
                label="Componente com estado"
                url="/estado/com"
                icon={<IconCode />}
            />
            <MenuItem label="Contador" url="/contador" icon={<IconNumbers />} />
            <MenuItem
                label="Campo de entrada"
                url="/campo-de-entrada"
                icon={<IconForms />}
            />
            <MenuItem
                label="Calculadora"
                url="/calculadora"
                icon={<IconCalculator />}
            />
            <span className="text-sm text-zinc-500">Fundamentos</span>
            <MenuItem label="Início" url="/pagina" icon={<IconFileCheck />} />
            <MenuItem
                label="Evento"
                url="/evento-basico"
                icon={<IconRepeat />}
            />
            <MenuItem
                label="Fundamentos"
                url="/fundamentos/pagina"
                icon={<IconCode />}
            />
            <span className="text-sm text-zinc-500">Componentes</span>
            <MenuItem
                label="Básico"
                url="/componentes/basico"
                icon={<IconCode />}
            />
            <MenuItem
                label="Título"
                url="/componentes/titulo"
                icon={<IconH1 />}
            />
            <MenuItem
                label="Trecho"
                url="/componentes/trecho"
                icon={<IconBrandJavascript />}
            />
        </aside>
    );
}
