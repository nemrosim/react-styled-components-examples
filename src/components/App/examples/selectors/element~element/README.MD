# CSS
```css
.main {
      background-color: red;
      width: 100%;
      height: 50px;
      margin-bottom: 5px;
}

.secondary {
      background-color: yellow;
      width: 100%;
      height: 50px;
}

.main ~ .secondary {
      background-color: green;
}
```
```tsx
export const PlainCSS: React.FC = () => {
    return (
        <>
            <div className="secondary" />
            <div className="main" />
            <div className="secondary" />
            <div className="secondary" />
            <div className="secondary" />
        </>
    );
};
```

# Styled components
```tsx
import React from 'react';
import styled from 'styled-components';

export const Main = styled.div`
    background-color: red;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
`;

export const Secondary = styled(Main)`
    background-color: yellow;
    ${Main} ~ & {
        background-color: green;
    }
`;

export const Styled = {
    Main,
    Secondary,
};

export const StyledComponents: React.FC = () => {
    return (
        <>
            <Styled.Secondary />
            <Styled.Main />
            <Styled.Secondary />
            <Styled.Secondary />
            <Styled.Secondary />
        </>
    );
};
```

# Result 
![](2022-02-20_23-20-13.jpg)
