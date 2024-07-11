import DinamicPage from '@/components/dinamic-page/DinamicPage';

export default function Page() {
	return (
		<DinamicPage
			headerTitle="Minha aplicação"
			headerSubtitle="Melhor aplicação da web!"
		>
			<h2 className="font-black">Fundamentos</h2>
			<p className="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
				commodi temporibus officiis non alias asperiores reprehenderit
				qui neque architecto. Sit nulla aperiam id nihil laborum vero,
				itaque rerum eligendi atque!
			</p>
		</DinamicPage>
	);
}
