import "@/app/globals.css";

import DinamicPage from "@/components/dinamic-page/DinamicPage";

export default function Sem() {
    let number = 0;

    function incrementNumber() {
        number += 1;
        console.log('number', number);
    }

    return (
        <DinamicPage
            headerTitle="Componente sem estado"
            headerSubtitle="Exemplo de componente sem estado"
        >
            <section className="flex flex-col gap-2 items-start">
                <span>{number}</span>
                <button
                    className="bg-blue-600 rounded-lg p-2"
                    onClick={incrementNumber}
                >Incrementar</button>
            </section>
        </DinamicPage>
    );
}