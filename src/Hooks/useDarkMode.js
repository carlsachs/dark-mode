import { useEffect } from "react";
import useLocalstorage from "./useLocalStorage.js";

const useDarkMode = bool => {

    const [mode, setMode] = useLocalstorage('mode', bool);
    let c = 'dark-mode'
    const body = document.querySelector('body')

    useEffect(() => {
        if(bool === true){
            body.classList.add(c)
            c = 'dark-mode'
        } else {
            body.classList.forEach(cl => {
                if (cl === 'dark-mode') {
                    body.classList.remove(c)
                }
            })
            c = ''
        }
    }, [mode])

    const setValue = value => {
        setMode(value)
    }

    return [setValue];
}
export default useDarkMode;
