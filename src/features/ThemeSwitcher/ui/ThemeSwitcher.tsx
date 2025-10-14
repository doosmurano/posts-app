import { Button } from "@/shared/ui/Button/Button";
import { useTheme } from "@/shared/lib/theme/useTheme";

export const ThemeSwitcher = () => {
    const [theme, toggleTheme] = useTheme();

    return (
    <Button onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
    </Button>
    )
}
