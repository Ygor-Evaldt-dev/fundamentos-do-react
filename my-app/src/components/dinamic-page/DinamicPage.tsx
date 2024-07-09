import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Props } from "./Props";
import SideArea from "../side-area/SideArea";

export default function DinamicPage({
    children,
    headerTitle,
    headerSubtitle
}: Props) {
    return (
        <section className={`
            flex
            h-screen
        `}>
            <SideArea />
            <section className="flex flex-col flex-1">
                <Header
                    title={headerTitle}
                    subtitle={headerSubtitle}
                    className="bg-zinc-800"
                />
                <Content>
                    {children}
                </Content>
                <Footer
                    leftText="Feito por: Ygor Evaldt"
                    rightText={`Todos os direitos reservados ${new Date().getFullYear()}`}
                />
            </section>
        </section>
    )
}