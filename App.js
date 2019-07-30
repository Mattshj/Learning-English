import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from "./src/screens/LoginScreen"
import GameChoosingScreen from "./src/screens/GameChoosingScreen"
import SignUpScreen from "./src/screens/SignupScreen"
import {Root} from "native-base";
import MyHeader from "./src/components/myHeader";
import BaseGameScreen from "./src/components/Game"

const MainNavigator = createStackNavigator({
        Login: {screen: LoginScreen},
        myHeader: {screen: MyHeader},
        GameChoosingScreen: {screen: GameChoosingScreen},
        GameScreen: {screen: BaseGameScreen},
        SignUpScreen: {screen: SignUpScreen},

    },

    {
        headerMode: 'none'//removing default header for creating our customization  header

    }
);

const App = createAppContainer(MainNavigator);

// export default ;
export default () =>
    <Root>
        <App/>
    </Root>;
