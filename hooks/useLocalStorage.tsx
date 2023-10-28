'use client'

import { useEffect, useState } from 'react';

const getSavedValue = (key: string, initialValue: string[]) => {
    const savedJSON = localStorage.getItem(key) 
    const saved = savedJSON ? JSON.parse(savedJSON) : null
    if (saved) return saved

    return initialValue
}

function useLocalStorage(key: string, initialValue: string[] = []) {
    const [items, SetItems] = useState(() => { return getSavedValue(key, initialValue) });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(items))
    }, [items])


    return [items, SetItems];
}

export default useLocalStorage;