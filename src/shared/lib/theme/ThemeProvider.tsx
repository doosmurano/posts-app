import { createContext } from "react";
import { PropsWithChildren, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const LOCAL_STORAGE_KEY = "theme";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedTheme as Theme || "light";
    });
    const toggleTheme = () => {
        setTheme((current) => current === "light" ? "dark" : "light");
    }

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 
