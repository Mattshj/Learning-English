import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Text} from "native-base";
import Wallpaper from "./Wallpaper";
import MyHeader from "./myHeader"

class Gamechoosing extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Wallpaper>
                    <MyHeader/>
                    <Content>
                        <Text style={{marginLeft: "25%", marginTop: 100}}> Choose type of the game </Text>
                        <Button rounded style={styles.button1} onPress={() => navigate('AnimalPage')}>
                            <Text>ANIMAL</Text>
                        </Button>
                        <Button rounded style={styles.button2}>
                            <Text>CARS</Text>
                        </Button>
                        <Button rounded style={styles.button3}>
                            <Text>COLOR</Text>
                        </Button>
                    </Content>
                </Wallpaper>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    button1: {
        // backgroundImage:source={wallpaper},
        marginTop: 120,
        flex: 1,
        marginLeft: "30%",
        marginRight: "30%",
    },
    button2: {
        marginTop: 10,
        flex: 1,
        marginLeft: "30%",
        marginRight: "30%",
    },
    button3: {
        marginTop: 10,
        flex: 1,
        marginLeft: "30%",
        marginRight: "30%",
    }
});
export default Gamechoosing
