import Result from '@/components/calculator/result/Result';
import DinamicPage from '@/components/dinamic-page/DinamicPage';
import IconMultiplier from '@/components/calculator/IconMultiplier';
import {
	IconDivide,
	IconMinus,
	IconMultiplier1x,
	IconPlus
} from '@tabler/icons-react';
import { useState } from 'react';

export default function Calculator() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);

	function handleUndifinedDivisions(value1: number, value2: number) {
		return value2 === 0 ? 0 : +(value1 / value2) || 0;
	}

	return (
		<DinamicPage
			headerTitle="Calculadora"
			headerSubtitle="Solução para o desafio proposto em aula de construir um tipo de calculadora"
		>
			<section className="flex p-4">
				<section className="flex flex-col items-start gap-4">
					<section className="flex gap-2">
						<div className="flex flex-col max-w-fit">
							<label htmlFor="value1">Valor 1:</label>
							<input
								className="input"
								type="number"
								name="value1"
								value={value1}
								onChange={(event) =>
									setValue1(+event.target.value)
								}
							/>
						</div>
						<div className="flex flex-col max-w-fit">
							<label htmlFor="value2">Valor 2:</label>
							<input
								className="input"
								type="number"
								name="value2"
								value={value2}
								onChange={(event) =>
									setValue2(+event.target.value)
								}
							/>
						</div>
					</section>
					<section>
						<Result
							number1={+value1}
							number2={+value2}
							result={value1 + value2}
							icon={<IconPlus />}
						/>
						<Result
							number1={value1}
							number2={value2}
							result={value1 - value2}
							icon={<IconMinus />}
						/>
						<Result
							number1={value1}
							number2={value2}
							result={value1 * value2}
							icon={<IconMultiplier />}
						/>
						<Result
							number1={value1}
							number2={value2}
							result={handleUndifinedDivisions(value1, value2)}
							icon={<IconDivide />}
						/>
					</section>
				</section>
			</section>
		</DinamicPage>
	);
}
