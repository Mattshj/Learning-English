import React, {Component} from 'react'
import {Header, Title, Left, Button, Icon,Body,Right} from "native-base";

class myHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Header androidStatusBarColor="#7b1fa2" style={{backgroundColor: "#9c27b0", height: 40}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Welcome</Title>
                </Body>
                <Right/>

            </Header>
        );
    }
}

export default myHeader
