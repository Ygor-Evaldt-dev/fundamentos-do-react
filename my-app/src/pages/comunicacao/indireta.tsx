import RandomValue from "@/components/comunication/indirect/RandomValue";
import DinamicPage from "@/components/dinamic-page/DinamicPage";

export default function Direct() {
    return (
        <DinamicPage
            headerTitle="Comunicação Indireta"
            headerSubtitle="A comunicação indireta ocorre do componente filho para o componente pai utilizando callbacks."
        >
            <RandomValue />
        </DinamicPage>
    );
}