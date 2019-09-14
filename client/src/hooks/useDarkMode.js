import {useEffect, useState} from "react"

export const DarkToggle = bool => !bool

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useState()

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkValue) {
            body.classList.add('darkmode')
        } else {
            body.classList.remove('darkmode')
        }
    }, [darkValue])

    return [darkValue, setDarkValue]
}

export default useDarkMode