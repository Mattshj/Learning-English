import {StyleSheet} from 'react-native';

const GameStyle = StyleSheet.create({
        TextStyle: {
            marginLeft: "30%",
            width: '15%',
            marginTop: 62,
        },
        SoundButtonStyle: {

            backgroundColor: "#fb8c00",
            marginTop: 60,
            height: 30,
            width: "13%",

        },

        InputStyle: {
            marginTop: 30,
            flex: 1,
            marginLeft: "30%",
            marginRight: "30%",
        },
        SubmitButtonStyle: {
            backgroundColor: "#fb8c00",
            marginTop: 10,
            flex: 1,
            marginLeft: "30%",
            marginRight: "30%",
        },
        ResultWinStyle: {
            marginTop: 15,
            backgroundColor: "#34fb1f",
            color: "#000000",
            fontSize: 28,
        },
        ResultFailStyle: {
            marginTop: 15,
            flex: 1,
            backgroundColor: "#ff0a14",
            color: "#000000",
            fontSize: 28,
        },
        SubmitIconStyle: {
            marginLeft: 23,
            width: 40,
            height: 43,
        }
    }
);
export default GameStyle
