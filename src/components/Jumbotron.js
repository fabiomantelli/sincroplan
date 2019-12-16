import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import electricalImage from '../assets/electrical.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${electricalImage}) no-repeat olivedrab bottom;
        background-size: cover;
        color: #efefef;
        height: 300px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0%;
        bottom: 0;
        right: 0%;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Tecnology is move on</h1>
                <p>and we need to reach it</p>
            </Container>
        </Jumbo>
    </Styles>
)