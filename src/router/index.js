import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash, HomePage, InputPage, UserPage, InputDataPage, LaporanPage, LoginPage} from '../Page';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Input" component={InputPage} />
        <Tab.Screen name="User" component={UserPage} />
      </Tab.Navigator>
  )
}

class Router extends Component{
  render(){
    return(
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
        <Stack.Screen name="InputDataPage" component={InputDataPage} options={{headerShown: false}} />
        <Stack.Screen name="LaporanPage" component={LaporanPage} options={{headerShown: false}} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
      </Stack.Navigator>
    )
  }
}
export default Router
