import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from "./src/screens/LoginScreen"
import GameChoosingScreen from "./src/screens/GameChoosingScreen"
import animalScreen from "./src/screens/AnimalScreen"
import humanBodyScreen from "./src/screens/HumanBodyScreen"
import FoodScreen from "./src/screens/FoodScreen"
import SignUpScreen from "./src/screens/SignupScreen"
import { Root } from "native-base";
const MainNavigator = createStackNavigator({
        Login: {screen: LoginScreen},
        SignUpScreen:{screen:SignUpScreen},
        GameChoosingScreen: {screen: GameChoosingScreen},
        animalScreen: {screen: animalScreen},
        humanBodyScreen: {screen: humanBodyScreen},
        FoodScreen: {screen: FoodScreen},
    },

    {
        headerMode: 'none'//removing default header for creating our customization  header

    }
);

const App = createAppContainer(MainNavigator);

// export default ;
export default () =>
    <Root>
        <App />
    </Root>;
