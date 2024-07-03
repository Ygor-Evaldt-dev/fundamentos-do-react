export default function Header({
    title,
    subtitle
}: any) {
    return (
        <header className={`
            h-36 rounded-lg 
            flex flex-col justify-center items-center 
            bg-purple-600 text-white 
        `}>
            <h1 className="text-3xl font-black">{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}