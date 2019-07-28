import React, {Component} from 'react'
import {Text, Image,} from 'react-native'
import LoginStyles from '../styles/LoginStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon} from "native-base";
import Wallpaper from "./Wallpaper";
import logo from "../assets/images/logo.png"

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Wallpaper>

                    {/*<MyHeader/>*/}
                    <Content>
                        <Image source={logo} style={LoginStyles.LogoView}>
                        </Image>
                        <Form style={LoginStyles.FormView}>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input/>
                            </Item>
                        </Form>
                        <Button onPress={() => navigate('Gamechoosing')}
                                full style={LoginStyles.ButtonView}>
                            <Text heigh>LOGIN</Text>
                        </Button>
                    </Content>

                </Wallpaper>
            </Container>
        );
    }
}

export default Login

