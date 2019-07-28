import React from 'react'
import {Text, Image,} from 'react-native'
import SignUpStyles from '../styles/SignupStyle'
import {Container, Content, Button, Form, View, Item, Label, Input, Icon} from "native-base";
import Wallpaper from "../components/Wallpaper";
import wallpaperPicture from "../assets/images/wallpaper7.jpg";
import MyHeader from "../components/myHeader"
class SignupScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <MyHeader />
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
                                <Input secureTextEntry={true}/>
                                <Icon name="lock" style={SignUpStyles.IconView}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Confirm password</Label>
                                <Input secureTextEntry={true}/>
                                <Icon name="lock" style={SignUpStyles.IconView}/>
                            </Item>
                        </Form>
                        <Button onPress={() => navigate('GameChoosingScreen')}
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
