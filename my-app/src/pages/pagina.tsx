import "@/app/globals.css";

import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/menu/Menu";

export default function Page() {
    return (
        <section className={`
            flex flex-col gap-2
            h-screen p-2
        `}>
            <Header
                title="Minha Página"
                subtitle="Estou na pasta pages"
            />
            <main className="flex flex-wrap gap-2 flex-1">
                <Menu />
                <Content>
                    <h2 className="font-black">
                        Origem
                    </h2>
                    <p className="text-lg">
                        Esta página está sendo construída no diretório pages
                    </p>
                </Content>
            </main>
            <Footer
                leftText="Feito com amor por: Ygor Evaldt"
                rightText={`Todos os direitos reservados ${new Date().getFullYear()}`}
            />
        </ section>
    );
}