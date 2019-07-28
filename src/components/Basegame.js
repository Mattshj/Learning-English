import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Text, Toast} from "native-base";
import Wallpaper from "./Wallpaper";
import WallpaperPicture from "../assets/images/wallpaper.png"
import MyHeader from "./myHeader";
import * as Alert from "react-native/Libraries/Alert/Alert";
import Sound from "react-native-sound";

function onPressButtonPlay(URL) {
    const callback = (error, sound) => {
        if (error) {
            Alert.alert('error', error.message);
            return;
        }
        // Run optional pre-play callback
        sound.play(() => {
            // Release when it's done so we're not using up resources
            sound.release();
        });
    };

    // If the audio is a 'require' then the second parameter must be the callback.
    const sound = new Sound(URL
        , Sound.MAIN_BUNDLE, error => callback(error, sound));


}

class Basegame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            success: false,
            showToast: false,
            i: 1
        }
    }


    render() {

        return (
            <Container>
                {/*<Wallpaper source={WallpaperPicture}>*/}
                <MyHeader/>
                <Content>
                    <Text style={{marginLeft: "25%", marginTop: 100}}> Enter Word that u hear </Text>

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.button1}>
                            <Item rounded>
                                <Input placeholder={this.state.i.toString() + "/5"}/>
                            </Item>
                        </View>
                        <View style={styles.button2}>
                            <Button rounded
                                    onPress={() => {
                                        return onPressButtonPlay(this.props.data[this.state.i].SoundUrl);
                                    }}
                            >
                                <Icon name='volume-high'/>
                            </Button>
                        </View>
                    </View>
                    <Item style={styles.button3}>
                        <Input placeholder='enter ur guess'
                               onChangeText={(txt) => {
                                   this.setState({
                                       answer: txt
                                   })
                               }}
                               value={this.state.answer}
                        />
                        {/*<Icon name='checkmark-circle'/>*/}
                    </Item>
                    <Button
                        style={styles.button3}

                        onPress={() => {

                            if (this.state.answer === this.props.data[this.state.i].CorrectAnswer) {

                                Toast.show({
                                    text: "successful",
                                    buttonText: "Okay",
                                    // duration:this.state.i,
                                });
                                this.setState({
                                    i: this.state.i + 1
                                })
                            } else {
                                Toast.show({
                                    text: "wrong answer",
                                    buttonText: "Okay",
                                    // duration:this.state.i,
                                })

                            }

                        }

                        }
                    >
                        <Text>submit</Text>
                    </Button>
                </Content>
                {/*</Wallpaper>*/}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    button1: {
        // flex:1,
        marginLeft: "25%",
        width: '15%',
        marginTop: 60,
        // height: 40,
    },
    button2: {
        marginTop: 60,
        // flex: 1,
        marginLeft: 20,
        height: 30,
        width: "15%",

    },
    button3: {
        marginTop: 90,
        flex: 1,
        marginLeft: "30%",
        marginRight: "30%",
    }
});
export default Basegame
