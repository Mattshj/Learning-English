import React from 'react';
import {createStackNavigator,createAppContainer}  from 'react-navigation'
import Login from "./src/components/Login"
import Signup from "./src/components/Signup"
const MainNavigator = createStackNavigator({
     Login: {screen: Login},
    Signup:{screen:Signup}
},

{
    headerMode:'none'//removing default header for creating our customization  header

}

);

const App = createAppContainer(MainNavigator);

export default App;
