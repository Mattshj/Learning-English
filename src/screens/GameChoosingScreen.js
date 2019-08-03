import React, {Component} from 'react';
import { Text} from 'react-native';
import {Container, Content, Button} from "native-base";
import Wallpaper from "../components/Wallpaper";
import MyHeader from "../components/myHeader"
import GameChoosingStyle from "../styles/GameChoosingStyle"
import * as d from "../assets/data/GameData"

class GameChoosingScreen extends Component {
    render() {

        return (
            <Container>
                <Wallpaper>
                    <MyHeader/>
                    <Content>
                        <Text style={GameChoosingStyle.TextStyle}> Choose type of the game </Text>
                        {
                            d.GameData.map((item) => {
                                return <Button rounded style={GameChoosingStyle.GameButton}
                                               onPress={() => {
                                                   this.props.navigation.navigate('GameScreen', {data: item})
                                               }}>
                                    <Text style={GameChoosingStyle.ButtonTextStyle} heigh>{item.name}</Text>
                                </Button>
                            })
                        }
                    </Content>
                </Wallpaper>
            </Container>
        );
    }
}

export default GameChoosingScreen
