'use client';

import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const updateTheme = () => {
        setTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{ theme, updateTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };
