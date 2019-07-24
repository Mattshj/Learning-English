import React , {Component} from 'react'
import {Text, View, } from 'react-native'
import {Header,Title} from "native-base";

class myHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
                <Header androidStatusBarColor="#7b1fa2" style={{backgroundColor:"#9c27b0" , height:40}}>
                <Title>
                WELCOME
                </Title>


                </Header>
        );
    }
}
export default myHeader
