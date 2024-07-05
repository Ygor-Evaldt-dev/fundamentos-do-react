import "@/app/globals.css";

import DinamicPage from "@/components/dinamic-page/DinamicPage";

export default function BasicEvent() {
    function handleClick(text: string) {
        console.log(text);
    }

    return (
        <DinamicPage
            headerTitle="Evento Básico"
            headerSubtitle="Click no botão para ver a execução de um evento básico"
        >
            <button
                className={`bg-indigo-700 rounded-lg px-2 py-4 max-w-fit`}
                onClick={() => handleClick('Olá mundo')}
                type="button"
            >Clique aqui</button>
        </DinamicPage>
    );
}