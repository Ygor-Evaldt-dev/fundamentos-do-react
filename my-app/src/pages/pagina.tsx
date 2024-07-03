import "@/app/globals.css";

import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
            <Content />
            <Footer />
        </ section>
    );
}