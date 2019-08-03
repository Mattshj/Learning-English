import React, {Component} from 'react';
import {Image,} from 'react-native';
import {Container, Content, Button, View, Input, Icon, Text, Toast} from "native-base";
import MyHeader from "./myHeader";
import * as Alert from "react-native/Libraries/Alert/Alert";
import Sound from "react-native-sound";
import GameStyle from "../styles/GameStyle"
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

class Game extends Component {
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
        const {params} = this.props.navigation.state;
        return (
            <Container>
                <MyHeader iconName="arrow-round-back"   onPress={() => this.props.navigation.goBack()}/>
                <Content>

                    <View style={{flexDirection: 'row'}}>
                        <View style={GameStyle.TextStyle}>
                            <Text>{this.state.NumberOfQuestion.toString() + "/5"}</Text>
                        </View>
                        <Button rounded
                                style={GameStyle.SoundButtonStyle}
                                onPress={() => {

                                    return onPressButtonPlay(params.data.questions[this.state.NumberOfQuestion].SoundUrl);
                                }}
                        >
                            <Icon name='volume-high'/>
                        </Button>
                    </View>


                    <Input placeholder='Enter your answer'
                           style={GameStyle.InputStyle}//todo
                           onChangeText={(txt) => {
                               this.setState({
                                   answer: txt
                               })
                           }}
                           value={this.state.answer}
                    />
                    <Button

                        disabled={this.state.disableSubmitButton}
                        style={GameStyle.SubmitButtonStyle}
                        onPress={() => {

                            if (this.state.answer === params.data.questions[this.state.NumberOfQuestion].CorrectAnswer) {
                                this.setState( (prevState)=>{
                                    return{
                                        trueCounter:prevState.trueCounter +1
                                    }
                                    }
                                );

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
                                this.setState( (prevState)=>{
                                        return{
                                            answer: "",
                                            NumberOfQuestion:prevState.NumberOfQuestion +1,
                                        }
                                    }
                                );
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
                        <Text> Submit</Text>
                        <Image source={SubmitIcon} style={GameStyle.SubmitIconStyle} resizeMode='stretch'/>
                    </Button>

                    {
                        this.state.disableSubmitButton ? <Text
                            style={{marginTop: 90}}> {"                  you answered :" + this.state.trueCounter.toString() + " true and " +
                        (5 - this.state.trueCounter).toString() + " false"
                        } </Text> : null
                    }
                    {
                        this.state.resultWin ?
                            <Text style={GameStyle.ResultWinStyle}>     you won , passed this level</Text> : null
                    }
                    {
                        this.state.resultFail ?
                            <Text style={GameStyle.ResultFailStyle}>              sorry you failed </Text> : null

                    }

                </Content>
            </Container>
        );
    }
}

export default Game
