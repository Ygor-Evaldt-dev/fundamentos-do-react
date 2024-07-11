import DinamicPage from '@/components/dinamic-page/DinamicPage';
import Logo from '@/components/logo/Logo';
import { IconBrandReact } from '@tabler/icons-react';

export default function Home() {
	return (
		<DinamicPage
			headerTitle="Fundamentos de React"
			headerSubtitle="Bem vindo ao mundo do desenvolvimento web moderno."
		>
			<section
				className={`
                flex flex-col justify-center items-center
                h-full
                text-zinc-500 text-center
            `}
			>
				<IconBrandReact
					size={200}
					stroke={1}
					rotate={45}
					className="rotate text-purple-600"
				/>
				<h1 className="text-2xl font-black text-zinc-400">
					Fundamentos de React
				</h1>
				<p className="max-w-22">
					Este projeto contempla todos os fundamentos sólidos da
					biblioteca React
				</p>
			</section>
		</DinamicPage>
	);
}
