import React from 'react'
import {Button, StyleSheet, Text, View} from "react-native";
class Signup extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        // const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1,}}>

                <Text allowFontScaling={true}

                      style={styles.txtStyle}>
                 SIGNUP
                </Text>

                <Button

                    // onPress={() => navigate('news')}
                    color={"#ff0a14"}
                    title={"news"}/>




            </View>
        )
    }
}




const styles = StyleSheet.create({
    txtStyle: {
        flex: 1,
        backgroundColor: 'rgba(254,246,255,0)',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        fontFamily: 'BOD_PSTC',
    },
});


export default Signup
