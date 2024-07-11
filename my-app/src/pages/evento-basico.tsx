import DinamicPage from '@/components/dinamic-page/DinamicPage';

export default function BasicEvent() {
    function handleClick(text: string) {
        alert(text);
    }

    return (
        <DinamicPage
            headerTitle="Evento Básico"
            headerSubtitle="Click no botão para ver a execução de um evento básico"
        >
            <button
                className={
                    `button max-w-fit`}
                onClick={() => handleClick('Este é um evento básico')}
                type="button"
            >
                Clique aqui
            </button>
        </DinamicPage>
    );
}
