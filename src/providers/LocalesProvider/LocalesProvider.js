import React, {createContext,useContext,useState,useCallback } from 'react'
import { langs } from './translation';

export const LocalesContext = createContext({})

export const useLocales = () => useContext(LocalesContext)

function LocalesProvider({children}) {

    const [lang,setLang] = useState('en')

    const toggleLang = useCallback(() => {
        setLang((prev) => (prev === "en" ? "ru" : "en"));
      }, []);

    return (
        <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
            {children}
        </LocalesContext.Provider>
    )
}

export default LocalesProvider