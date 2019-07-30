import React from 'react'
import {Text,} from 'react-native'
// import {AsyncStorage, Text,} from 'react-native'
import SignUpStyles from '../styles/SignupStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Toast} from "native-base";
import Wallpaper from "../components/Wallpaper";
import wallpaperPicture from "../assets/images/wallpaper7.jpg";
import MyHeader from "../components/myHeader";
import AsyncStorage from '@react-native-community/async-storage';

// import * as AsyncSorage from "react-native/Libraries/Storage/AsyncStorage";
class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            checkPassword: false,//checking password and confirm password
            password: "",
            EndOfSignup: false,
            confirmPassword: "",
        }
    }

    render() {
        const {navigation} = this.props;


        return (
            <Container>
                <MyHeader iconName="arrow-round-back" onPress={() => this.props.navigation.goBack()}/>
                <Wallpaper source={wallpaperPicture}>

                    <Content>

                        <Form style={SignUpStyles.FormView}>
                            <Item stackedLabel>
                                <Label>First name</Label>
                                <Input onChangeText={(txt) => {
                                    this.setState({
                                        firstname: txt
                                    })
                                }}
                                       value={this.state.firstname}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Last name</Label>
                                <Input onChangeText={(txt) => {
                                    this.setState({
                                        lastname: txt
                                    })
                                }}
                                       value={this.state.lastname}
                                />
                            </Item>


                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input onChangeText={(txt) => {
                                    this.setState({
                                        username: txt
                                    })
                                }}
                                       value={this.state.username}
                                />
                                <Icon name="contact" style={SignUpStyles.IconView}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry={true}
                                       onChangeText={(txt) => {
                                           this.setState({
                                               password: txt
                                           })
                                       }}
                                       value={this.state.password}

                                />
                                <Icon name="lock" style={SignUpStyles.IconView}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Confirm password</Label>
                                <Input secureTextEntry={true}
                                       onChangeText={(txt) => {
                                           this.setState({
                                               confirmPassword: txt
                                           })
                                       }}
                                       value={this.state.confirmPassword}
                                />
                                <Icon name="lock" style={SignUpStyles.IconView}/>
                            </Item>
                        </Form>
                        <Button onPress={this.saveUser
                        }


                            // () =>
                            // {

                            // if(this.state.password===this.state.confirmPassword)
                            // {
                            //     navigate('GameChoosingScreen')
                            //
                            // }
                            // else {
                            //     Toast.show({
                            //         text: "passwords doesnt match",
                            //     });
                            // }
                            // }
                            // }
                                full style={SignUpStyles.SignUpButtonView}>
                            <Text heigh>SIGN UP</Text>
                        </Button>


                    </Content>

                </Wallpaper>
            </Container>
        )
    }

    saveUser = async () => {

        try {
            let user = await AsyncStorage.getItem(this.state.username);
            let parsed = JSON.parse(user);
            if (parsed !== null) {
                alert(" this user is Existence");
            } else {
                let obj = {
                    first: this.state.firstname,
                    last: this.state.lastname,
                    user: this.state.username,
                    pass: this.state.password,

                };
                alert("user successfully submitted");
                AsyncStorage.setItem(this.state.username, JSON.stringify(obj));
            }
        } catch (error) {
            alert(" this user is not Existence");

        }
    }
}



export default SignupScreen
