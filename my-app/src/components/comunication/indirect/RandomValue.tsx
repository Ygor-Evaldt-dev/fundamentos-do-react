import { useState } from "react"
import Button from "./button/Button";

export default function RandomValue() {
    const [value, setValue] = useState(123);

    return (
        <section className="flex flex-col justify-center items-start gap-2">
            <h2>{value}</h2>
            <Button
                setValue={setValue}
            />
        </section>
    )
}