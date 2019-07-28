import {StyleSheet} from 'react-native';

const GameChoosingStyle = StyleSheet.create({

        TextStyle: {
            fontSize:22,
            color:"#000000",
            marginLeft: "17%",
            marginTop: 100,
        },
        AnimalButton: {
            backgroundColor: "#fb8c00",
            // backgroundImage:source={wallpaper},
            marginTop: 80,
            flex: 1,
            marginLeft: "20%",
            marginRight: "20%",
        },
        HumanBodyButton: {
            backgroundColor: "#fb8c00",
            marginTop: 30,
            flex: 1,
            marginLeft: "20%",
            marginRight: "20%",
        },
        FoodButton: {
            backgroundColor: "#fb8c00",
            marginTop: 30,
            // flex: 1,
            marginLeft: "20%",
            marginRight: "20%",
        },
        HumanBodyIconView: {
            // justifyContent: 'flex-end',
            marginLeft: 30,
            width: 40,
            height: 43,
        },
        FoodTextView: {
            // justifyContent: 'flex-end',
            marginLeft: 60,
            // width: 40,
            // height: 43,
        },
        FoodIconView: {
            // justifyContent: 'flex-end',
            marginLeft: 90,
            width: 40,
            height: 43,
        },
    }
);
export default GameChoosingStyle
