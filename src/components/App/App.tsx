import React, { useState } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { Styled } from './styled';
import { theme } from './theme';
import logo from './logo.svg';

const StyledButton = styled.button`
    background-color: ${({ theme }) =>
        theme.mode === 'light'
            ? theme.styles.colors.secondary[600]
            : theme.styles.colors.primary[500]};
    border: none;
    border-radius: 10px;
    font-size: calc(5px + 2vmin);
    height: 40px;
    margin: 10px;
    box-shadow: 3px 3px 5px 0px rgba(53, 149, 175, 0.6);
`;

export const App: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    const currentTheme: DefaultTheme = {
        ...theme,
        mode: isDark ? 'dark' : 'light',
    };

    return (
        <ThemeProvider theme={currentTheme}>
            <Styled.App display="flex" flexDirection="column" alignItems="center">
                <GlobalStyle />
                <Styled.Header flexDirection="column" alignItems="center" isDark={isDark}>
                    <Styled.Logo src={logo} alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Styled.Link
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </Styled.Link>
                    <StyledButton
                        onClick={() => {
                            setIsDark(!isDark);
                        }}
                    >
                        Change theme
                    </StyledButton>
                </Styled.Header>
            </Styled.App>
        </ThemeProvider>
    );
};
