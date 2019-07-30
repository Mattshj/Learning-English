import React, {Component} from 'react';
import {Image, ImageBackground, Text} from 'react-native';
import {Container, Content, Button, Form, View, Item, Label, Input, Icon} from "native-base";
import Wallpaper from "../components/Wallpaper";
import MyHeader from "../components/myHeader"
import GameChoosingStyle from "../styles/GameChoosingStyle"
import FoodIcon from "../assets/images/burger.png";
import HumanBodyIcon from "../assets/images/human.png";
import AnimalIcon from "../assets/images/animal.png"
import * as d from "../assets/data/animaldata"
import * as d1 from "../assets/data/humanbodydata"
import * as d2 from "../assets/data/fooddata"
class GameChoosingScreen extends Component {
    render() {
        // const {navigate} = this.props.navigation;

        return (
            <Container>
                <Wallpaper>
                    <MyHeader/>
                    <Content>
                        <Text style={GameChoosingStyle.TextStyle}> Choose type of the game </Text>
                        <Button rounded style={GameChoosingStyle.AnimalButton}
                                onPress={() => {
                                    this.props.navigation.navigate('GameScreen', {data: d.animaldata})
                                }}>




                            <Text style={{marginLeft: 50}} heigh>Animal</Text>
                            <Image source={AnimalIcon} style={GameChoosingStyle.FoodIconView} resizeMode='stretch'/>
                        </Button>
                        <Button rounded style={GameChoosingStyle.HumanBodyButton}
                                onPress={() => {
                                    this.props.navigation.navigate('GameScreen', {data: d1.humanbodydata})
                                }}>
                            <Text>Human body anatomy</Text>
                            <Image source={HumanBodyIcon} style={GameChoosingStyle.HumanBodyIconView}
                                   resizeMode='stretch'/>
                        </Button>
                        <Button rounded style={GameChoosingStyle.FoodButton}
                                onPress={() => {
                                    this.props.navigation.navigate('GameScreen', {data: d2.fooddata})
                                }}>
                            <Text style={GameChoosingStyle.FoodTextView}>Food</Text>
                            <Image source={FoodIcon} style={GameChoosingStyle.FoodIconView} resizeMode='stretch'/>
                        </Button>
                    </Content>
                </Wallpaper>
            </Container>
        );
    }
}

export default GameChoosingScreen
