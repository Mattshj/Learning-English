import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Container, Content, Button, Form, View, Item, Label, Input, Icon, Text} from "native-base";
import Wallpaper from "./Wallpaper";
import MyHeader from "./myHeader"
import Sound from 'react-native-sound'
class Animalpage extends Component {
    render() {

        var whoosh=new Sound('')

        return (
            <Container>
                <Wallpaper>
                    <MyHeader/>
                    <Content>
                        <Text style={{marginLeft: "25%", marginTop: 100}}> Enter Word that u hear </Text>

                        <View style={{flexDirection: 'row' , marginTop:40}}>
                            <View style={styles.button1}>
                                <Item rounded>
                                    <Input placeholder='Question 1'/>
                                </Item>
                            </View>
                            <View style={styles.button2}>
                                <Button rounded>
                                    <Icon name='volume-high'/>
                                </Button>
                            </View>
                        </View>
                        <Item  style={styles.button3}>
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
        marginLeft:"25%",
        width: '30%',
        marginTop: 20,
        height: 30,
    },
    button2: {
        marginTop: 20,
        // flex: 1,
        marginLeft:5,
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
