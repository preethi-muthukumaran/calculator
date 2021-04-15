import React, { Component } from 'react';
import styled from 'styled-components';
var visible;
const Container = styled.div`
    visibility: ${props => props.visible};
    background-color: #4444;
    color: blue;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

export const Notification = props => {

    return(
        <React.Fragment>
            <Container top = {props.top} visible = {props.visibility}>OK</Container>
        </React.Fragment>
    );
}
