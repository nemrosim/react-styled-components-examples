import styled, { keyframes } from 'styled-components';
import { LayoutProps, FlexboxProps, layout, flexbox, compose } from 'styled-system';
import { Properties as CSSProperties } from 'csstype';

const App = styled.div<LayoutProps & FlexboxProps>`
    text-align: center;
    ${compose(layout, flexbox)}
`;

interface StyledHeaderProps {
    alignItems: CSSProperties['alignItems'];
    flexDirection: 'column' | 'row';
    isDark: boolean;
}

const Header = styled.header<StyledHeaderProps>`
    background-color: ${({ theme }) => {
        return theme.mode === 'light'
            ? theme.styles.colors.neutral[0]
            : theme.styles.colors.neutral[800];
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
    width: 100%;
`;

const logoKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${logoKeyframes} infinite 20s linear;
    }
`;

const Link = styled.a`
    color: ${({ theme }) =>
        theme.mode === 'light'
            ? theme.styles.colors.secondary[500]
            : theme.styles.colors.secondary[600]};
`;

export const Styled = {
    App,
    Header,
    Logo,
    Link,
};
