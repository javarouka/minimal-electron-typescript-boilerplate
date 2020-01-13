import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        * {
            box-sizing: inherit;
        }
    }
`;

const Wrapper = styled.div``;

const Layout: React.FunctionComponent = props => {
    return (
        <Wrapper>
            <GlobalStyle />
            {props.children}
        </Wrapper>
    );
};

export default Layout;
