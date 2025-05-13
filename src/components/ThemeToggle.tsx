import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  margin: 1rem;
  border-radius: 6px;
`;

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <ToggleButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </ToggleButton>
    );
};

export default ThemeToggle;
