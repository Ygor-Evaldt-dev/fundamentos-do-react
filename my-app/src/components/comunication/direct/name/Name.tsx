import { Props } from './Props';

export default function Name({ value }: Props) {
	return (
		<span className="text-5xl font-black bg-yellow-500 rounded-lg p-2">
			{value}
		</span>
	);
}
