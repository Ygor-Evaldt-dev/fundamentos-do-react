import DinamicPage from '@/components/dinamic-page/DinamicPage';
import { useState } from 'react';

export default function Com() {
	const [number, setNumber] = useState(0);

	function incrementNumber() {
		setNumber(number + 1);
	}

	return (
		<DinamicPage
			headerTitle="Componente com estado"
			headerSubtitle="Exemplo de componente com estado"
		>
			<section className="flex flex-col gap-2 items-start">
				<div className="flex gap-2">
					<span>Número:</span>
					<span>{number}</span>
				</div>
				<button
					className="bg-blue-600 rounded-lg p-2"
					onClick={incrementNumber}
				>
					Incrementar
				</button>
			</section>
		</DinamicPage>
	);
}
