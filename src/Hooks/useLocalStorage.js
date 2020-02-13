import React, {useState} from "react";


export default function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
}