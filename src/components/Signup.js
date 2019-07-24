import React from 'react'
import {Button, StyleSheet, Text, View} from "react-native";
import styles from '../styles/SignupStyle'

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



export default Signup
