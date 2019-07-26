import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from "./src/components/Login"
import GamePage from "./src/components/Gamechoosing"
import Animalpage from "./src/components/Animalpage";

const MainNavigator = createStackNavigator({
         Login: {screen: Login},
        GamePage: {screen: GamePage},
        AnimalPage: {screen: Animalpage}
    },

    {
        headerMode: 'none'//removing default header for creating our customization  header

    }
);

const App = createAppContainer(MainNavigator);

export default App;
