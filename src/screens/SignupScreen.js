import React from 'react'
import {Text, Image,} from 'react-native'
import SignUpStyles from '../styles/SignupStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Toast} from "native-base";
import Wallpaper from "../components/Wallpaper";
import wallpaperPicture from "../assets/images/wallpaper7.jpg";
import MyHeader from "../components/myHeader"
class SignupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checkPassword: false,//checking password and confirm password
            password:"",
            confirmPassword:"",
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
                                <Input/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Last name</Label>
                                <Input/>
                            </Item>


                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input/>
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
                        <Button onPress={() => {
                            if(this.state.password===this.state.confirmPassword)
                            {
                                navigate('GameChoosingScreen')

                            }
                            else {
                                Toast.show({
                                    text: "passwords doesnt match",
                                });
                            }
                            }}
                                full style={SignUpStyles.SignUpButtonView}>
                            <Text heigh>SIGN UP</Text>
                        </Button>

                    </Content>

                </Wallpaper>
            </Container>
        )
    }


}


export default SignupScreen
