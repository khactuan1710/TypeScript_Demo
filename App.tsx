import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Home from './features/Home/Home'
import MyFriend from './features/myFriend/MyFriend'
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator();


import 'react-native-gesture-handler';
export class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MyFriend" component={MyFriend} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App
