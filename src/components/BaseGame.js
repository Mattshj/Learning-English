import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Text, Toast} from "native-base";
import MyHeader from "./myHeader";
import * as Alert from "react-native/Libraries/Alert/Alert";
import Sound from "react-native-sound";
import BaseGameStyle from "../styles/BaseGameStyle"
import SubmitIcon from "../assets/images/submit.png";

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

class BaseGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            trueCounter: 0,//counting true answer
            disableSubmitButton: false,//for disabling Button at the end
            resultWin: false,
            resultFail: false,
            showToast: false,
            NumberOfQuestion: 1
        }
    }


    render() {

        return (
            <Container>
                <MyHeader iconName="menu"/>
                <Content>

                    <View style={{flexDirection: 'row'}}>
                        <View style={BaseGameStyle.TextStyle}>
                            <Text>{this.state.NumberOfQuestion.toString() + "/5"}</Text>
                        </View>
                        <Button rounded
                                style={BaseGameStyle.SoundButtonStyle}
                                onPress={() => {
                                    return onPressButtonPlay(this.props.data[this.state.NumberOfQuestion].SoundUrl);
                                }}
                        >
                            <Icon name='volume-high'/>
                        </Button>
                    </View>


                    <Input placeholder='Enter your answer'
                           style={BaseGameStyle.InputStyle}//todo
                           onChangeText={(txt) => {
                               this.setState({
                                   answer: txt
                               })
                           }}
                           value={this.state.answer}
                    />
                    <Button

                        disabled={this.state.disableSubmitButton}
                        style={BaseGameStyle.SubmitButtonStyle}
                        onPress={() => {

                            if (this.state.answer === this.props.data[this.state.NumberOfQuestion].CorrectAnswer) {
                                this.setState({
                                    trueCounter: this.state.trueCounter + 1
                                });

                                Toast.show({
                                    text: "successful",
                                    buttonText: "Okay",
                                });

                            } else {
                                Toast.show({
                                    text: "wrong answer",
                                    buttonText: "Okay",
                                })

                            }
                            if (this.state.NumberOfQuestion < 5) {
                                this.setState({
                                    answer: "",
                                    NumberOfQuestion: this.state.NumberOfQuestion + 1
                                });
                            }
                            if (this.state.NumberOfQuestion === 5 && this.state.trueCounter > 2) {
                                this.setState({
                                    resultWin: true,
                                    disableSubmitButton: true,
                                });

                            } else if (this.state.NumberOfQuestion === 5 && this.state.trueCounter < 2) {
                                this.setState({
                                    resultFail: true,
                                    disableSubmitButton: true,
                                });
                            }

                        }}
                    >
                        <Text> submit</Text>
                        <Image source={SubmitIcon} style={BaseGameStyle.SubmitIconStyle} resizeMode='stretch'/>
                    </Button>

                    {
                        this.state.disableSubmitButton ? <Text
                            style={{marginTop: 90}}> {"                  you answered :" + this.state.trueCounter.toString() + " true and " +
                        (5 - this.state.trueCounter).toString() + " false"
                        } </Text> : null
                    }
                    {
                        this.state.resultWin ?
                            <Text style={BaseGameStyle.ResultWinStyle}>    you won , passed this level</Text> : null
                    }
                    {
                        this.state.resultFail ?
                            <Text style={BaseGameStyle.ResultFailStyle}>              sorry you failed </Text> : null

                    }

                </Content>
            </Container>
        );
    }
}

export default BaseGame
