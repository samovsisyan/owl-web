import { useTheme } from '../context/ThemeContext';
import ThemeToggle from "@/components/ThemeToggle";

const HomePage = () => {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <h1>Welcome to my website!</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeToggle />
        </div>
    );
};

export default HomePage;
