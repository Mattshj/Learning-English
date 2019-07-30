import React, {Component} from 'react'
import {Text, Image,} from 'react-native'
import LoginStyles from '../styles/LoginStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon} from "native-base";
import Wallpaper from "../components/Wallpaper";
import logo from "../assets/images/logo.png"
import wallpaperPicture from "../assets/images/wallpaper6.jpg"
import AsyncStorage from '@react-native-community/async-storage';
class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
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
                                <Input onChangeText={(txt) => {
                                    this.setState({
                                        username: txt
                                    })
                                }}
                                       value={this.state.firstname}/>
                                <Icon name="contact" style={LoginStyles.IconView}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} onChangeText={(txt) => {
                                    this.setState({
                                        password: txt
                                    })
                                }}
                                       value={this.state.password}/>
                                <Icon name="lock" style={LoginStyles.IconView}/>
                            </Item>
                        </Form>
                        <Button
                            onPress={this.LoginUsers}
                            full style={LoginStyles.LogInButtonView}>
                            <Text heigh>LOGIN</Text>
                        </Button>
                        <Button transparent


                                onPress={() => navigate('SignUpScreen')}
                                full style={LoginStyles.SignUpButtonView}>
                            <Text heigh>sign up?</Text>
                        </Button>
                    </Content>

                </Wallpaper>
            </Container>
        );
    }

    LoginUsers = async () => {
        try {
            let user = await AsyncStorage.getItem(this.state.username);
            let parsed = JSON.parse(user);
            if (parsed.pass === this.state.password) {
                const {navigate} = this.props.navigation;
                navigate('GameChoosingScreen');
            }
            else {
                alert("wrong username or password");
            }
        } catch (error) {
            alert("wrong username or password");

        }

    }
}

export default LoginScreen

