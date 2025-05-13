import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../theme/theme';
import { ThemeProviderCustom, useTheme } from '../context/ThemeContext';

const InnerApp = ({ Component, pageProps }: AppProps) => {
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default function App(props: AppProps) {
    return (
        <ThemeProviderCustom>
            <InnerApp {...props} />
        </ThemeProviderCustom>
    );
}
