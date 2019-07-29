import React from 'react'
import {AsyncStorage, Text,} from 'react-native'
import SignUpStyles from '../styles/SignupStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Toast} from "native-base";
import Wallpaper from "../components/Wallpaper";
import wallpaperPicture from "../assets/images/wallpaper7.jpg";

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
            confirmPassword: "",
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
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
                        <Button onPress={saveData(this.state.firstname,
                            this.state.lastname,
                            this.state.username,
                            this.state.password,
                        )}


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


}

function saveData(firstname, lastname, username, password) {
    let obj = {
        first: firstname,
        last: lastname,
        user: username,
        pass: password,

    };
    AsyncStorage.setItem(username, JSON.stringify(obj));
}


export default SignupScreen
