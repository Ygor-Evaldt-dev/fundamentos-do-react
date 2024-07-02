export default function Page() {
    const users = [
        <li key="1">
            Usuário 01
        </li>,
        <li key="2">
            Usuário 02
        </li>,
        <li key="3">
            Usuário 03
        </li>
    ];

    return (
        <ul>
            {users}
        </ul>
    );
}