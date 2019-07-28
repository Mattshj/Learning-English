import React, {Component} from 'react'
import {Text, Image,} from 'react-native'
import LoginStyles from '../styles/LoginStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon} from "native-base";
import Wallpaper from "../components/Wallpaper";
import logo from "../assets/images/logo.png"
import wallpaperPicture from "../assets/images/wallpaper6.jpg"

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {navigate} = this.props.navigation;
        return (

            <Container>
                <Wallpaper source={wallpaperPicture}>

                    <Content>
                        <Image source={logo} style={LoginStyles.LogoView}>
                        </Image>
                        <Form style={LoginStyles.FormView}>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input/>
                                <Icon name="contact" style={LoginStyles.IconView} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry={true}/>
                                <Icon name="lock" style={LoginStyles.IconView} />
                            </Item>
                        </Form>
                        <Button onPress={() => navigate('GameChoosingScreen')}
                                full style={LoginStyles.LogInButtonView}>
                            <Text heigh>LOGIN</Text>
                        </Button>
                        <Button transparent onPress={() => navigate('SignUpScreen')}
                                full style={LoginStyles.SignUpButtonView}>
                            <Text heigh>sign up?</Text>
                        </Button>
                    </Content>

                </Wallpaper>
            </Container>
        );
    }
}

export default LoginScreen

