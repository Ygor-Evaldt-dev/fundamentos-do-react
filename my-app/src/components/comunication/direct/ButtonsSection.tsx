import { useState } from "react"
import Name from "./name/Name";

export default function ButtonsSection() {
    const [name, setName] = useState('');

    return (
        <section className="flex flex-col bg-zinc-500 rounded-lg p-4 max-w-fit gap-4 justify-center">
            <section className="flex gap-2 bg-green-800 rounded-lg p-4">
                <button
                    onClick={() => setName('Maria')}
                    className="button"
                >
                    Maria
                </button>
                <button
                    onClick={() => setName('João')}
                    className="button"
                >
                    João
                </button>
                <button
                    onClick={() => setName('Pedro')}
                    className="button"
                >
                    Pedro
                </button>
            </section>
            <Name
                value={name}
            />
        </section>
    )
}