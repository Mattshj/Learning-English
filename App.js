import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from "./src/components/Login"
import Gamechoosing from "./src/components/Gamechoosing"
import animalScreen from "./src/components/AnimalScreen"
import humanbodyScreen from "./src/components/HumanBodyScreen"
import { Root } from "native-base";
const MainNavigator = createStackNavigator({
        Login: {screen: Login},
        Gamechoosing: {screen: Gamechoosing},
        animalScreen: {screen: animalScreen},
        humanbodyScreen: {screen: humanbodyScreen}

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
