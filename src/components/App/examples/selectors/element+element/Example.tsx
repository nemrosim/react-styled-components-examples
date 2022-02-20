import React from 'react';
import styled from 'styled-components';
import './styles.css';

export const Main = styled.div`
    background-color: red;
    width: 100%;
    height: 50px;
`;

/**
 *  Styles will be applied only if element
 *  is placed immediately after "Div" component
 */
export const Secondary = styled(Main)`
    background-color: green;
    ${Main} + & {
        background-color: yellow;
    }
`;

export const Styled = {
    Main,
    Secondary,
};

export const PlainCSS: React.FC = () => {
    return (
        <>
            <div className="secondary" />
            <div className="main" />
            <div className="secondary" />
        </>
    );
};

export const StyledComponents: React.FC = () => {
    return (
        <>
            <Styled.Secondary />
            <Styled.Main />
            <Styled.Secondary />
        </>
    );
};
