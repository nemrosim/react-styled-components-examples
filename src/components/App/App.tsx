import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Properties as CSSProperties } from 'csstype';

import { GlobalStyle } from '../GlobalStyle';
import logo from './logo.svg';

const logoKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface StyledHeaderProps {
    alignItems: CSSProperties['alignItems'];
    flexDirection: 'column' | 'row';
    isDark: boolean;
}

const Styled = {
    App: styled.div`
        text-align: center;
    `,
    Header: styled.header<StyledHeaderProps>`
        background-color: ${({ isDark }) => {
            return isDark ? '#282c34' : '#ffffff';
        }};
        flex-direction: ${({ flexDirection }) => {
            return flexDirection;
        }};
        align-items: ${(props) => {
            return props.alignItems;
        }};
        min-height: 100vh;
        display: flex;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    `,
    Logo: styled.img`
        height: 40vmin;
        pointer-events: none;
        @media (prefers-reduced-motion: no-preference) {
            animation: ${logoKeyframes} infinite 20s linear;
        }
    `,
    Link: styled.a`
        color: #61dafb;
    `,
    Button: styled.button`
        background-color: #61dafb;
        border: none;
        border-radius: 10px;
        font-size: calc(5px + 2vmin);
        height: 25px;
        margin: 10px;
        box-shadow: 3px 3px 5px 0px rgba(53, 149, 175, 0.6);
    `,
};

export const App: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <Styled.App>
            <GlobalStyle />
            <Styled.Header flexDirection="column" alignItems="center" isDark={isDark}>
                <Styled.Logo src={logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Styled.Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </Styled.Link>
                <Styled.Button
                    onClick={() => {
                        setIsDark(!isDark);
                    }}
                >
                    Change theme
                </Styled.Button>
            </Styled.Header>
        </Styled.App>
    );
};
