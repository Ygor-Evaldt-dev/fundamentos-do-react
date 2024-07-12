import ButtonsSection from "@/components/comunication/direct/ButtonsSection";
import DinamicPage from "@/components/dinamic-page/DinamicPage";

export default function Direct() {
    return (
        <DinamicPage
            headerTitle="Comunicação Direta"
            headerSubtitle="A comunicação direta ocorre do componente pai para o compoente filho utilizando 'props'."
        >
            <ButtonsSection />
        </DinamicPage>
    );
}