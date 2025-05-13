import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the type for the theme context
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
    // Check localStorage for saved theme on component mount
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Set theme from localStorage on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Save theme to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
