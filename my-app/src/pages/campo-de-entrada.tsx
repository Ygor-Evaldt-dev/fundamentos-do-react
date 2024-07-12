import DinamicPage from '@/components/dinamic-page/DinamicPage';
import { useState } from 'react';

export default function InputCamp() {
	const [value, setValue] = useState('');

	function changeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value);
	}

	return (
		<DinamicPage
			headerTitle="Campo de entrada"
			headerSubtitle="Exemplo de campo de entrada com estado"
		>
			<div className="flex flex-col gap-2 justify-start">
				<label htmlFor="inputCamp">Campo de entrada:</label>
				<input
					name="inputCamp"
					className="input max-w-fit"
					type="text"
					value={value}
					onChange={changeInputValue}
				/>
			</div>
			<span>{value}</span>
		</DinamicPage>
	);
}
