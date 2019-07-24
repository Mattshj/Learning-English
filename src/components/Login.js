import React from 'react'
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native'

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Welcome to CNN news',
        backgroundColor: '#ff6177',
    };

    render() {

         const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1,}}>

                <Text allowFontScaling={true}

                      style={styles.txtStyle}>
                    LOGIN
                </Text>

                <Button

                    onPress={() => navigate('Signup')}
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
export default Login

