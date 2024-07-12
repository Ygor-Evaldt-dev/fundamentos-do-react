import Logo from '@/components/logo/Logo';
import Menu from '@/components/menu/Menu';

export default function SideArea() {
    return (
        <section className="bg-black overflow-y-auto">
            <Logo />
            <Menu />
        </section>
    );
}
