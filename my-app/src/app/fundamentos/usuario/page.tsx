export default function Page() {
	const user = {
		name: 'Desenvolvedor',
		birth: '1996-12-16'
	};

	return (
		<section>
			<p>{user.name}</p>
			<input type="date" value={user.birth} className="text-black" />
		</section>
	);
}
