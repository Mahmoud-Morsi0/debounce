import { useEffect, useState } from "react";

export default function useDebounce(text, delay) {

    const [debouncedValue, setDebouncedValue] = useState(text);
    console.log(debouncedValue)


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(text)
        }, delay)
        return () => {
            clearTimeout(timer)
        }

    }, [text, delay])


    return debouncedValue
}