import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../base';
import GlobalStyle from '../base/GlobalStyle';

const Wrapper = styled(Block)``;

const Layout: React.FunctionComponent = props => {
    return (
        <Wrapper>
            <GlobalStyle />
            {props.children}
        </Wrapper>
    );
};

export default Layout;
