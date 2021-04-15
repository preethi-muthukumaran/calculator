import React, { Component } from 'react';
import styled from 'styled-components';
var visible;
const Container = styled.div`
    visibility: ${props => props.visible};
    background-color: #4444;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

export const Notification = props => {
    const showNotification = () => {
        this.setState({
            top: 16,
        }, () => {
            setTimeout(() => {
                this.setState({
                    top: -100,
                });
            }, 3000);
        });
    }

    return(
        <React.Fragment>
            <Container top = {props.top} visible = {props.visibility}>A user has logged a calculation!</Container>
        </React.Fragment>
    );
}
