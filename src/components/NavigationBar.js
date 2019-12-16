import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        
        &:hover {
            color: white;
        }
    }

`

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Sincroplan Engenharia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Início</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">Sobre</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/technical">Corpo Técnico</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/portfolio">Portfólio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contato</Nav.Link></Nav.Item>

            </Nav>
        </Navbar>
    </Styles>
)