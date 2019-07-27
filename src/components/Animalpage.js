import React, {Component} from 'react';
import {ImageBackground, StyleSheet, default as ToastAndroid} from 'react-native';
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Text} from "native-base";
import Wallpaper from "./Wallpaper";
import MyHeader from "./myHeader"
import * as Alert from "react-native/Libraries/Alert/Alert";
import Sound from "react-native-sound";

function onPressButtonPlay() {
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
    const sound = new Sound('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3'
        , Sound.MAIN_BUNDLE, error => callback(error, sound));


}
class Animalpage extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <Container>
                <Wallpaper>
                    <MyHeader/>
                    <Content>
                        <Text style={{marginLeft: "25%", marginTop: 100}}> Enter Word that u hear </Text>

                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.button1}>
                                <Item rounded>
                                    <Input placeholder=' 1/5'/>
                                </Item>
                            </View>
                            <View style={styles.button2}>
                                <Button rounded
                                    onPress={() => {
                                        return onPressButtonPlay();
                                    }}
                                    >
                                    <Icon name='volume-high'/>
                                </Button>
                            </View>
                        </View>
                        <Item style={styles.button3}>
                            <Input placeholder='Textbox with Success Input'/>
                            <Icon name='checkmark-circle'/>
                        </Item>
                    </Content>
                </Wallpaper>
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
export default Animalpage
