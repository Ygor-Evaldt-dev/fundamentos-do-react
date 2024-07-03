import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Page() {
    return (
        <section className={`
            flex flex-col gap-2 
            p-2 h-screen
        `}>
            <Header
                title="Minha aplicação"
                subtitle="Melhor aplicação da web!"
            />
            <Content>
                <h2 className="font-black">
                    Subtítulo
                </h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, commodi temporibus officiis non alias asperiores reprehenderit qui neque architecto. Sit nulla aperiam id nihil laborum vero, itaque rerum eligendi atque!
                </p>
            </Content>
            <Footer
                leftText="Feito com amor por: Ygor Evaldt"
                rightText={`Todos os direitos reservados ${new Date().getFullYear()}`}
            />
        </section>
    )
}