import type { AppProps } from 'next/app';
import { GlobalStyle } from '../components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
