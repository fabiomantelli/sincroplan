import React from 'react';
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=EB+Garamond');
    body {
        font-family: 'EB Garamond', serif;
    }

`

export const Layout = (props) => (
    <Container>
        <GlobalStyles />
        {props.children}
    </Container>
)