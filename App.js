import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from "./src/screens/LoginScreen"
import GameChoosing from "./src/components/Gamechoosing"
import animalScreen from "./src/screens/AnimalScreen"
import humanBodyScreen from "./src/screens/HumanBodyScreen"
import FoodScreen from "./src/screens/FoodScreen"
import { Root } from "native-base";
const MainNavigator = createStackNavigator({
        Login: {screen: LoginScreen},
        GameChoosing: {screen: GameChoosing},
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
