import '@/app/globals.css';
import DinamicPage from "@/components/dinamic-page/DinamicPage";
import { IconBoxMultiple, IconBoxMultiple0, IconMinus, IconPlus, IconResize } from "@tabler/icons-react";
import { useState } from 'react';

export default function Counter() {

    const [number, setNumber] = useState(0);
    const [delta, setDelta] = useState(1);

    function incrementNumber() {
        setNumber(number + delta);
    }

    function decrementNumber() {
        setNumber(number - delta);
    }

    function resetNumber() {
        setNumber(0);
    }

    function decrementDelta() {
        if (delta === 1) return;

        setDelta(delta - 1);
    }

    function incrementDelta() {
        setDelta(delta + 1);
    }

    return (
        <DinamicPage
            headerTitle="Contador"
            headerSubtitle="Desafio de construção de um contador básico"
        >
            <section className={`
                h-full
                flex flex-col items-center justify-center gap-10
            `}>
                <section className='text-3xl font-black'>
                    Contador Simples
                </section>
                <section>
                    <span className={`
                        text-9xl 
                    `}>
                        {number}
                    </span>
                </section>
                <section className={`
                    flex gap-4 items-center
                `}>
                    <button
                        className={`
                            bg-red-700 hover:bg-red-600 transition-all
                            px-6 py-2 rounded-lg 
                        `}
                        onClick={decrementNumber}
                    >
                        <IconMinus />
                    </button>
                    <button
                        className={`
                            bg-blue-700 hover:bg-blue-600 transition-all
                            px-6 py-2 rounded-lg 
                        `}
                        onClick={incrementNumber}
                    >
                        <IconPlus />
                    </button>
                </section>

            </section>
            <section className='flex justify-between items-center'>
                <section>
                    <button
                        onClick={resetNumber}
                        className={`
                            flex gap-2
                            bg-zinc-600 hover:bg-zinc-500 transition-all
                            px-4 py-2 rounded-lg 
                        `}
                    >
                        <IconBoxMultiple0 />
                        Zerar Contador
                    </button>
                </section>
                <section className={`
                    flex
                    gap-2 justify-end items-end
                `}>
                    <span>Delta</span>
                    <div className='flex gap-2 items-center'>
                        <span className='text-3xl font-black'>
                            {delta}
                        </span>
                        <button
                            onClick={decrementDelta}
                            className='bg-gray-500 rounded-full'
                        >
                            <IconMinus />
                        </button>
                        <button
                            onClick={incrementDelta}
                            className='bg-gray-600 rounded-full'
                        >
                            <IconPlus />
                        </button>
                    </div>
                </section>
            </section>
        </DinamicPage>
    )
}