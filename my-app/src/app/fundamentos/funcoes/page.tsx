export default function Page() {
    function renderHeader() {
        return (
            <header>
                <h1>Título</h1>
                <p>Descrição</p>
            </header>
        );
    }

    function renderContent() {
        return (
            <u>
                <li>Conteúdo 1</li>
                <li>Conteúdo 2</li>
                <li>Conteúdo 3</li>
            </u>
        )
    }

    return (
        <section>
            {renderHeader()}
            <hr />
            {renderContent()}
        </section>
    )
} 