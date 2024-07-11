import { IconEqual } from "@tabler/icons-react";
import { Props } from "./Props";

export default function Result({
    number1,
    number2,
    result,
    icon
}: Props) {
    return (
        <section className="flex items-center gap-2">
            <span className="text-3xl font-black">{number1}</span>
            <span>{icon}</span>
            <span className="text-3xl font-black">{number2}</span>
            <span><IconEqual /></span>
            <span className="text-3xl font-black">{result}</span>
        </section>
    );
}