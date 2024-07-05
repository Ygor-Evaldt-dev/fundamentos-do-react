import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";

export default function DinamicPage({
    children,
    headerTitle,
    headerSubtitle
}: any) {
    return (
        <section className={`
            flex gap-2
            h-screen p-2
        `}>
            <Menu />
            <section className="flex flex-col flex-1 gap-2">
                <Header
                    title={headerTitle}
                    subtitle={headerSubtitle}
                    className="bg-gradient-to-r from-blue-600 to-zinc-800"
                />
                <Content>
                    {children}
                </Content>
                <Footer
                    leftText="Feito com amor por: Ygor Evaldt"
                    rightText={`Todos os direitos reservados ${new Date().getFullYear()}`}
                />
            </section>
        </section>
    )
}