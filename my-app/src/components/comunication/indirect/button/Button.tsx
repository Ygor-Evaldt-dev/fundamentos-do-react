import { Props } from './Props';

export default function Button({ setValue }: Props) {
	return (
		<button className="button" onClick={() => setValue(Math.random())}>
			Mudar Valor
		</button>
	);
}
