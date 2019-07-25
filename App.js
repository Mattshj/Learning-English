import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from "./src/components/Login"
import GamePage from "./src/components/Gamechoosing"

const MainNavigator = createStackNavigator({
         Login: {screen: Login},
        GamePage: {screen: GamePage}
    },

    {
        headerMode: 'none'//removing default header for creating our customization  header

    }
);

const App = createAppContainer(MainNavigator);

export default App;
