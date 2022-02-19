// import original module declarations
import 'styled-components';

type ThemeMode = 'light' | 'dark';

declare module 'styled-components' {
    export interface DefaultTheme {
        mode: ThemeMode;
        styles: {
            colors: {
                primary: {
                    1000: string;
                    900: string;
                    800: string;
                    700: string;
                    600: string;
                    500: string;
                    400: string;
                    300: string;
                };
                secondary: {
                    1000: string;
                    900: string;
                    800: string;
                    700: string;
                    600: string;
                    500: string;
                    400: string;
                    300: string;
                };
                neutral: {
                    1000: string;
                    900: string;
                    800: string;
                    700: string;
                    600: string;
                    500: string;
                    400: string;
                    300: string;
                    200: string;
                    100: string;
                    0: string;
                };
            };
        };
    }
}
